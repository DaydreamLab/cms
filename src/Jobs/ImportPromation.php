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

class ImportPromation implements ShouldQueue
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
        ItemAdminService $itemAdminService,
        BrandService  $brandService
    )
    {
        $this->filePath = $filePath;
        $this->itemAdminService = $itemAdminService;
        $this->brandService = $brandService;
        $this->brandService->setUser($this->itemAdminService->getUser());
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
        $sheet = $spreadsheet->getSheetByName('促銷訊息');
        $rows = $sheet->getHighestRow();
        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $brand = $this->firstOrCreateBrand($rowData[2]);
            $promotion = $this->firstOrCreatePromotionItem($rowData);

            // 更新關聯
            $promotion->brands()->sync([$brand->id]);
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }

    private function firstOrCreateBrand($title)
    {
        $brand = $this->brandService->getModel()->where('title', $title)->first();

        if (! $brand) {
            $brand = $this->brandService->store(collect([
                'title' => $title,
                'alias' => Str::uuid()->getHex(),
                'params' => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []]
            ]));
        }

        return $brand;
    }

    private function firstOrCreatePromotionItem($rowData)
    {
        $promotion = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 7)
            ->first();

        if ($rowData[5] != null) {
            $rowData[5]  = str_replace('/', '-', $rowData[5]) . ' 00:00:00';
        }

        if ($rowData[6] != null) {
            $rowData[6] = str_replace('/', '-', $rowData[6]) . ' 00:00:00';
        }

        $data = collect([
            'content_type' => 'promotion',
            "language" => "*",
            'title' => $rowData[0],
            'category_id' => 7,
            'state' =>  $rowData[3] == '發佈中' ? 1 : 0,
            'publish_up' => substr($rowData[4], 0, 4) . '-' . substr($rowData[4], 4, 2) . '-' . substr($rowData[4], 6, 2),
            'description' => html_entity_decode(preg_replace('/_x([0-9a-fA-F]{4})_/', '&#x$1;', $rowData[7])),
            'extrafields' => [
                [
                    'alias' => 'subtitle',
                    'value' => $rowData[2]
                ],
                [
                    "alias" => "register_start",
                    "value" => $rowData[5]
                ],
                [
                    "alias" => "register_end",
                    "value" => $rowData[6]
                ]
            ]
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($promotion) {
            $data->put('id', $promotion->id);
            $data->put('params', $promotion->params);
            $data->put('ordering', $promotion->ordering);
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

        $promotion = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 7)
            ->first();

        return $promotion;
    }


    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'B'; $j <= 'S'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}