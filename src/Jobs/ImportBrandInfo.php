<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use DaydreamLab\User\Models\User\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportBrandInfo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $filePath;

    protected $brandService;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        $filePath,
        BrandAdminService  $brandService
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

        $sheet = $spreadsheet->getSheetByName('品牌資訊');
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
        $data = [
            'title' => $rowData[0],
            'logo_image' => $rowData[1],
            'description' => $rowData[2],
        ];

        if ($brand) {
            $data['id'] = $brand->id;
            $data['params'] = $brand->params;
        } else {
            $data['alias'] = (string) Str::uuid();
            $data['params'] =  ["meta" => [ "title" => "", "keywords" => "", "description" => ""], "seo" => []];
        }
        $brand = $this->brandService->store(collect($data));
        $user = User::whereHas('groups', function ($q) {
            $q->where('users_groups.id', 4);
        })->get()->each(function ($user) use ($brand) {
            $user->brands()->syncWithoutDetaching($brand->id);
        });
        return $brand;
    }



    private function getXlsxRowData($sheet, $rowNum)
    {
        $data = [];

        for($j = 'A'; $j <= 'C'; $j++) {
            $key = $j.$rowNum;
            $data[] = $sheet->getCell($key)->getValue();
        }

        return $data;
    }
}