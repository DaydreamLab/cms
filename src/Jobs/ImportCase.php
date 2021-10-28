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
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportCase implements ShouldQueue
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
        $sheet = $spreadsheet->getSheetByName('成功案例');
        $rows = $sheet->getHighestRow();

        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);
            // 創建或獲取的品牌資料
            $brands = $this->firstOrCreateBrand($rowData[2]);

            // 創建或獲取產業分類
            $industryCategory = $this->firstOrCreateIndustryCategory($rowData[3]);

            // 創建或更新成功案例
            $case = $this->firstorCreateCaseItem($rowData, $industryCategory);

            // 更新關聯
            $case->brands()->sync($brands->pluck('id'));
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }


    private function firstOrCreateBrand($brandTitles)
    {
        $result = new Collection();
        $titles = explode(',', $brandTitles);

        foreach ($titles as $title) {
            $brand = $this->brandService->getModel()->where('title', $title)->first();
            if (! $brand) {
                $brand = $this->brandService->store(collect([
                    'title' => $title,
                    'alias' => Str::uuid()->getHex(),
                    'params' => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []]
                ]));
            }

            $result->push($brand);
        }

        return $result;
    }


    private function firstOrCreateIndustryCategory($title)
    {
        $industryCategory = $this->itemAdminService->getModel()
            ->where('title', $title)
            ->where('category_id', 14)
            ->first();

        if (! $industryCategory) {
            $industryCategory = $this->itemAdminService->store(collect([
                'title' => $title,
                'alias' => Str::uuid()->getHex(),
                'category_id' => 14,
                "language" => "*",
                'params' => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []],
                'publish_up' => now()->timezone('UTC')->format('Y-m-d H:i:s')
            ]));
        }

        return $industryCategory;
    }

    private function firstOrCreateCaseItem($rowData, $industryCategory)
    {

        $case = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 4)
            ->first();

        $data = collect([
            'content_type' => 'case',
            'title' => $rowData[0],
            'category_id' => 4,
            'state' =>  $rowData[5] == '發佈中' ? 1 : 0,
            'publish_up' => substr($rowData[4], 0, 4) . '-' . substr($rowData[4], 4, 2) . '-' . substr($rowData[4], 6, 2),
            'description' => html_entity_decode(preg_replace('/_x([0-9a-fA-F]{4})_/', '&#x$1;', $rowData[6])),
            'extrafields' => [
                [
                    'alias' => 'industry_category',
                    'value' => $industryCategory->id
                ],
                [
                    'alias' => 'subtitle',
                    'value' => html_entity_decode(preg_replace('/_x([0-9a-fA-F]{4})_/', '&#x$1;', $rowData[1])),
                ]
            ]
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($case) {
            $data->put('id', $case->id);
            $data->put('params', $case->params);
            $data->put('ordering', $case->ordering);
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

        $case = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 4)
            ->first();

        return $case;
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
