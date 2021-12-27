<?php

namespace DaydreamLab\Cms\Services\ProductCategory\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Repositories\ProductCategory\Admin\ProductCategoryAdminRepository;
use DaydreamLab\Cms\Resources\ProductCategory\Admin\Models\ProductCategoryAdminListResource;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Support\Collection;
use Kalnoy\Nestedset\Collection as NestCollection;

class ProductCategoryAdminService extends ProductCategoryService
{
    public function __construct(ProductCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function export(Collection $input)
    {

        $product_categories = $this->tree();

        $spreedsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreedsheet->getActiveSheet();

        $headers = ['分類名稱', '分類代號', '分類描述', '圖片'];
        $h = 1;
        foreach ($headers as $header) {
            $sheet->setCellValueByColumnAndRow($h, 1, $header);
            $h+=1;
        }

        $r = 2;
        foreach ($product_categories as $product) {
            for ($i =1; $i<=count($headers); $i+=1) {
                switch ($i) {
                    case 1:
                        $v = $product->title;
                        break;
                    case 2:
                        $v = $product->alias;
                        break;
                    case 3:
                        $v = $product->description;
                        break;
                    case 4:
                        $v = $product->image;
                        break;
                    default:
                        $v = '';
                        break;
                }
                $sheet->setCellValueExplicitByColumnAndRow($i, $r, $v, 's');
            }
            $r+=1;
        }

        $filename = 'product_category_export.xlsx';
        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreedsheet);
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="'. urlencode($filename).'"');
        ob_clean();
        $writer->save('php://output');
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function store(Collection $input)
    {
        $item = parent::store($input);

        return $item;
    }


    public function tree()
    {
        $tz = $this->user->timezone;

        $all = $this->all()->map(function ($p) use ($tz) {
            $locker = ($p->locker) ? $p->locker->only(['id', 'uuid', 'name']) : [];
            unset($p->locker);
            $p->locker = $locker;

            $created_at = Carbon::parse($p->created_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->created_at);
            $p->created_at = $created_at;

            $updated_at = Carbon::parse($p->updated_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->updated_at);
            $p->updated_at = $updated_at;

            $locked_at = Carbon::parse($p->locked_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->locked_at);
            $p->locked_at = $locked_at;

            return $p;
        })->sortBy(function ($sp) {
            return $sp->ordering;
        });
        $all = new NestCollection($all);

        $tree = $all->toTree();

        $this->status = 'GetTreeListSuccess';
        $this->response = $tree;

        return $tree;
    }
}
