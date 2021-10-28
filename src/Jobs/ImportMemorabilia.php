<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportMemorabilia implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $filePath;

    protected $itemAdminService;

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
        $sheet = $spreadsheet->getSheetByName('大事記');
        $rows = $sheet->getHighestRow();
        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);
            // 創建或更新資料
            $this->firstOrCreateMemorabilia($rowData);
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }


    private function firstOrCreateMemorabilia($rowData)
    {

        $memorabilia = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 9)
            ->first();

        $data = collect([
            'content_type' => 'memorabilia',
            'category_id' => 9,
            'title' => $rowData[0],
            'description' => null,
            "language" => "*",
            'state' => 1,
            'publish_up' => now()->timezone('UTC')->format('Y-m-d H:i:s'),
            'extrafields' => [
                [
                    'alias' => 'year',
                    'value' => $rowData[1]
                ],
                [
                    'alias' => 'month',
                    'value' => 6
                ]
            ]
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($memorabilia) {
            $data->put('id', $memorabilia->id);
            $data->put('params', $memorabilia->params);
            $data->put('ordering', $memorabilia->ordering);
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

        $memorabilia = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 8)
            ->first();

        return $memorabilia;
    }


    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'A'; $j <= 'B'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}