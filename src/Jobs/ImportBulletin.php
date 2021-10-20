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

class ImportBulletin implements ShouldQueue
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

        for ($i = 3; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $brand = $this->firstOrCreateBrand($rowData[2]);
            $bulletin = $this->firstOrCreateBulletinItem($rowData);

            // 更新關聯
            $brand->items()->attach($bulletin->id);
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
                'alias' => $title,
                'params' => ["meta" => [ "titel" => "", "keyword" => "", "description" => ""], "seo" => []]
            ]));
        }

        return $brand;
    }

    private function firstOrCreateBulletinItem($rowData)
    {
        $bulletin = $this->itemAdminService->getModel()->where('title', $rowData[0])->first();


        if (! $bulletin) {
            $bulletin = $this->itemAdminService->store(collect([
                'content_type' => 'bulletin',
                "language" => "*",
                'title' => $rowData[0],
                'alias' => Str::uuid()->getHex(),
                'category_id' => 6,
                'state' =>  $rowData[4] == '發佈中' ? 1 : 0,
                'params' => ["meta" => [ "titel" => "", "keyword" => "", "description" => ""], "seo" => []],
                'publish_up' => substr($rowData[3], 0, 4) . '-' . substr($rowData[3], 4, 2) . '-' . substr($rowData[3], 6, 2),
                'description' => html_entity_decode($rowData[5]),
                'extrafields' => [
                    [
                        'alias' => 'subtitle',
                        'value' => $rowData[1]
                    ]
                ]
            ]));
        }

        return $bulletin;
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