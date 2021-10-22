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

class ImportBrandContact implements ShouldQueue
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
        BrandService  $brandService
    )
    {
        $this->filePath = $filePath;
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

        for ($i = 2; $i <= $rows; $i++) {

            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $brand = $this->firstOrCreateBrand($rowData);
        }

        // 刪除暫存檔
        unlink($this->filePath);
    }

    private function firstOrCreateBrand($rowData)
    {
        $brand = $this->brandService->getModel()->where('title', $rowData[0])->first();
        $contact = [];

        $count = count(explode(',', $rowData[1]));

        for ($i = 0; $i < $count; $i++) {
            $contact[] = [
                'name' => explode(',', $rowData[1] ?? '')[$i],
                'gender' => explode(',', $rowData[2] ?? '')[$i],
                'countryCode' => rtrim(ltrim(explode(',', $rowData[3] ?? '')[$i], '('), ')'),
                'phone' => explode(',', $rowData[4] ?? '')[$i],
                'extension' => explode(',', $rowData[5] ?? '')[$i]
            ];
        }

        $data = collect([
            'title' => $rowData[0],
            'contact' => $contact,
            'params'  => ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []]
        ]);

        if ($brand) {
            $data->put('id', $brand->id);
            $data->put('parmas', $brand->parmas);
        } else {
            $data->put('alias', Str::uuid()->getHex());
        }

        $brand = $this->brandService->store($data);

        return $brand;
    }

    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'A'; $j <= 'F'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}