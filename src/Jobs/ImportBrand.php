<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
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
        ProductCategoryService $productCategoryService,
        ProductService $productService,
        BrandAdminService  $brandService
    )
    {
        $this->filePath = $filePath;
        $this->brandService = $brandService;
        $this->productCategoryService = $productCategoryService;
        $this->productService = $productService;
        $this->productCategoryService->setUser($this->brandService->getUser());
        $this->productService->setUser($this->brandService->getUser());
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
            dump($i);
            $rowData = $this->getXlsxRowData($sheet, $i);
            // 創建獲取的資料
            $brand = $this->firstOrCreateBrand($rowData[0]);
            $productCategory = $this->firstOrCreateProductCategories($rowData[1]);
            $product = $this->firstOrCreateProduct($rowData, $productCategory);

            // 更新關聯
            $product->brands()->sync([$brand->id]);
            $product->productCategories()->sync([$productCategory->id]);
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
                'params' => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []],
            ]));
            dump('create: '. $title);
        }

        return $brand;
    }


    private function firstOrCreateProductCategories($title)
    {
        $productCategory = $this->productCategoryService->getModel()->where('title', $title)->first();

        if (! $productCategory) {
            $productCategory = $this->productCategoryService->store(collect([
                'title' => $title,
                'alias' => Str::uuid()->getHex(),
                'params' => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []],
            ]));
        }

        return $productCategory;
    }


    private function firstOrCreateProduct($rowData, $productCategory)
    {
        $data = collect([
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
        ]);

        $product = $this->productService->getModel()
            ->where('title', $data['title'])
            ->first();

        // 系列存在
        if ($product) {
            $data->put('id', $product->id);
            $data->put('params', $product->params);

            $oldProductIndex = array_search($data->get('product_data')[0]['title'], array_column($product->product_data, 'title'));
            $product_data = $product->product_data;
            if ($oldProductIndex === false) {
                // 產品不存在使用 append
                $product_data[] = $data->get('product_data')[0];

            } else {
                // 產品存在使用 update
                $product_data[$oldProductIndex] = $data->get('product_data')[0];
            }
            $data->put('product_data', $product_data);

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
            $data->put('publish_up', now()->timezone('UTC')->format('Y-m-d H:i:s'));
        }

        $this->productService->store($data);

        $product = $this->productService->getModel()
            ->where('title', $data['title'])
            ->first();

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