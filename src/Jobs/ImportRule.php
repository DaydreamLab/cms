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

class ImportRule implements ShouldQueue
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
        $sheet = $spreadsheet->getSheet(0);
        $rows = $sheet->getHighestRow();

        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $rule = $this->firstOrCreateRuleItem($rowData);
            $file = $this->firstOrCreateFileRecord($rowData);

            // 更新關聯
            $rule->files()->sync([$file->id]);
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }

    private function firstOrCreateRuleItem($rowData)
    {
        $rule = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 11)
            ->first();

        $data = collect([
            'content_type' => 'rules',
            'title' => $rowData[0],
            'language' => "*",
            'category_id' => 11,
            'state' => 1,
            'publish_up' => now()->timezone('UTC')->format('Y-m-d H:i:s'),
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($rule) {
            $data->put('id', $rule->id);
            $data->put('params', $rule->params);
            $data->put('ordering', $rule->ordering);
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

        $rule = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 11)
            ->first();

        return $rule;
    }


    private function firstOrCreateFileRecord($rowData)
    {
        $file = File::where(['uuid' => $rowData[2]])
                    ->where('category_id', 6)
                    ->first();

        if (! $file) {
            $file =  File::create([
                'ordering' => File::max('id') + 1,
                'uuid' => $rowData[1],
                'name' => $rowData[2],
                'category_id' => 6,
                'userGroupId' => 0,
                'state' => 1,
                'blobName' => $rowData[3],
                'contentType' => $rowData[4],
                'extension' => $rowData[5],
                'size' => $rowData[6],
                'url' => $rowData[7],
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