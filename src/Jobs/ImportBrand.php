<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportBrand implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $filePath;

    protected $repo;

    protected $productCategoryRepo;

    protected $productCategoryService;

    protected $productService;

    protected $brandService;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        $filePath,
        BrandAdminRepository $repo,
        ProductCategoryService $productCategoryService,
        ProductService $productService,
        BrandService  $brandService
    )
    {
        $this->filePath = $filePath;
        $this->repo = $repo;
        $this->productCategoryService = $productCategoryService;
        $this->productService = $productService;
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
            $brand = $this->firstOrCreateBrand($rowData[0]);
            $productCategory = $this->firstOrCreateProductCategories($rowData[1]);
            $product = $this->firstOrCreateProduct($rowData, $productCategory);

           // 更新關聯
            $oldProductBrand = $product->brands()->first();

            if ($oldProductBrand && $product->brands()->first()->id != $brand->id) {
                $product->brands()->detach();
            }
            $product->brands()->attach($brand->id);
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
                'params' => ["meta" => [ "titel" => "", "keyword" => "", "description" => ""], "seo" => []],
            ]));
        }

        return $brand;
    }


    private function firstOrCreateProductCategories($title)
    {
        $productCategory = $this->productCategoryService->getModel()->where('title', $title)->first();

        if (! $productCategory) {
            $productCategory = $this->productCategoryService->store(collect([
                'title' => $title,
                'alias' => $title,
                'params' => ["meta" => [ "titel" => "", "keyword" => "", "description" => ""], "seo" => []],
            ]));
        }

        return $productCategory;
    }


    private function firstOrCreateProduct($rowData, $productCategory)
    {
//        dump('processing ' . $rowData[3]);
        $productRecord = [
            'title' => $rowData[2],
            'product_category_id' => $productCategory->id,
            'product_data' => [[
                'title' => $rowData[8] ?? $rowData[3],
                'description' => $rowData[4],
                'recommandPrice' => $rowData[5],
                'distributePrice' => $rowData[6],
                'warranty' => $rowData[7],
                'size' => $rowData[9],
                'protocal' => $rowData[10],
                'maxExtendHddNum' => $rowData[11],
                'maxRawSpace' => $rowData[12],
                'system' => $rowData[13],
                'note' => $rowData[14],
                'unlimitPhoneSupportAmt' => $rowData[15],
                'level' => $rowData[16],
                'renew' => $rowData[17]
            ]]
        ];

        $product = $this->productService->getModel();
        foreach ($productRecord as $key => $value) {
            if ($key != 'product_data') {
                $product = $product->where($key, $value);
            }
        }
        $product = $product->first();

        if (! $product) {
//            dump('產品系列不存在 建立一比新紀錄');
            // 新增紀錄
            $productRecord['alias'] = Str::uuid()->getHex();
            $this->productService->store(collect($productRecord));
            $product = $this->productService->getModel();
            foreach ($productRecord as $key => $value) {
                if ($key != 'product_data') {
                    $product = $product->where($key, $value);
                }
            }
            $product = $product->first();
        } else {
            dump('產品系列已存在 插入產品資訊');
            $productData = $product->product_data;
            $productData[] = $productRecord['product_data'][0];
            $product->product_data = $productData;
            $product->save();
        }

        return $product;
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