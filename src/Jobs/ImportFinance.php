<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use DaydreamLab\Media\Models\File\File;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportFinance implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $filePath;

    protected $itemAdminService;

    protected $brandService;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        $filePath,
        ItemAdminService $itemAdminService
    )
    {
        $this->filePath = $filePath;
        $this->itemAdminService = $itemAdminService;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $reader->setReadDataOnly(true);
        $spreadsheet = $reader->load($this->filePath);
        $sheet = $spreadsheet->getSheetByName('財務資訊');
        $rows = $sheet->getHighestRow();

        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $finance = $this->firstOrCreateFinanceItem($rowData);
            $file = $this->firstOrCreateFileRecord($rowData);

            // 更新關聯
            $finance->files()->sync([$file->id]);
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }

    private function firstOrCreateFinanceItem($rowData)
    {

        $finance = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 10)
            ->first();

        $data = collect([
            'content_type' => 'finance',
            'title' => $rowData[0],
            'language' => "*",
            'category_id' => 10,
            'state' => 1,
            'publish_up' => now()->timezone('UTC')->format('Y-m-d H:i:s'),
            'extrafields' => [
                [
                    'alias' => 'year',
                    'value' => $rowData[1]
                ]
            ]
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($finance) {
            $data->put('id', $finance->id);
            $data->put('params', $finance->params);
            $data->put('ordering', $finance->ordering);
        } else {
            $data->put('alias', Str::uuid()->getHex());
            $data->put('params', [
                'meta' => [
                    'title' => '',
                    'keywords' => '',
                    'description' => '',
                ],
                'seo' => []
            ]);
        }

        $this->itemAdminService->store($data);

        $finance = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 10)
            ->first();

        return $finance;
    }


    private function firstOrCreateFileRecord($rowData)
    {
        $file = File::where(['uuid' => $rowData[2]])
                    ->where('category_id', 5)
                    ->first();

        if (! $file) {
            $file =  File::create([
                'ordering' => File::max('id') + 1,
                'uuid' => $rowData[2],
                'name' => $rowData[3],
                'category_id' => 5,
                'userGroupId' => 0,
                'state' => 1,
                'blobName' => $rowData[4],
                'contentType' => $rowData[5],
                'extension' => $rowData[6],
                'size' => $rowData[7],
                'url' => $rowData[8],
                'access' => 1,
                'encrypted' => 0,
                'params' => [
                    'upload' => 'file'
                ],
                'publish_up' => now()->timezone('UTC')->format('Y-m-d H:i:s')
            ]);
        }

        return $file;
    }


    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'A'; $j <= 'S'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}