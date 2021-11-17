<?php

namespace DaydreamLab\Cms\Jobs;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use DaydreamLab\User\Models\User\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ImportVideo implements ShouldQueue
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
        $sheet = $spreadsheet->getSheetByName('零壹影片');
        $rows = $sheet->getHighestRow();

        for ($i = 2; $i <= $rows; $i++) {
            $rowData = $this->getXlsxRowData($sheet, $i);

            // 創建獲取的資料
            $brand = $this->firstOrCreateBrand($rowData[1]);
            $videoItem = $this->firstOrCreateVideoItem($rowData);

            // 更新關聯
            $videoItem->brands()->sync([$brand->id]);
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

        $user = User::whereHas('groups', function ($q) {
            $q->where('users_groups.id', 4);
        })->get()->each(function ($user) use ($brand) {
            $user->brands()->syncWithoutDetaching($brand->id);
        });
        
        return $brand;
    }

    private function firstOrCreateVideoItem($rowData)
    {

        $video = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 8)
            ->first();

        $data = collect([
            'content_type' => 'video',
            'title' => $rowData[0],
            'category_id' => 8,
            'state' =>  $rowData[5] == '發佈中' ? 1 : 0,
            'publish_up' => substr($rowData[4], 0, 4) . '-' . substr($rowData[4], 4, 2) . '-' . substr($rowData[4], 6, 2),
            'description' => html_entity_decode(preg_replace('/_x([0-9a-fA-F]{4})_/', '&#x$1;', $rowData[3])),
            'extrafields' => [
                [
                    'alias' => 'youtube_url',
                    'value' => $rowData[2]
                ]
            ]
        ]);

        // 如果有抓到舊資料改成更新舊資料資訊
        if ($video) {
            $data->put('id', $video->id);
            $data->put('params', $video->params);
            $data->put('ordering', $video->ordering);
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

        $video = $this->itemAdminService->getModel()
            ->where('title', $rowData[0])
            ->where('category_id', 8)
            ->first();

        return $video;
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