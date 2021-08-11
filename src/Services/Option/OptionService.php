<?php

namespace DaydreamLab\Cms\Services\Option;

use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use DaydreamLab\Media\Services\FileCategory\Admin\FileCategoryAdminService;
use DaydreamLab\User\Models\Company\CompanyCategory;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Support\Collection;

class OptionService
{
    use LoggedIn;

    protected $modelName = 'Option';

    public $status;

    public $response;

    protected $map = [];

    public function __construct(CategoryAdminService $categoryAdminService,
                                LanguageAdminService $languageAdminService,
                                ViewlevelAdminService $viewlevelAdminService,
                                AssetAdminService $assetAdminService,
                                UserGroupAdminService $groupAdminService,
                                MenuAdminService $menuAdminService,
                                ExtrafieldGroupAdminService $extrafieldGroupAdminService,
                                ItemAdminService $itemAdminService,
                                ModuleAdminService $moduleAdminService,
                                ProductCategoryAdminService $productCategoryAdminService,
                                BrandAdminService $brandAdminService,
                                SiteAdminService $siteAdminService,
                                FileCategoryAdminService $fileCategoryAdminService)
    {
        $this->map['asset']                 = $assetAdminService;
        $this->map['brand']                 = $brandAdminService;
        $this->map['extension']             = ['item, menu, module'];
        $this->map['extrafield_group']      = $extrafieldGroupAdminService;
        $this->map['item_article_category'] = $categoryAdminService;
        $this->map['item_category']         = $categoryAdminService;
        $this->map['item_content_type']     = ['article', 'item', 'link', 'menu', 'slideshow', 'timeline'];
        $this->map['language']              = $languageAdminService;
        $this->map['menu']                  = $menuAdminService;
        $this->map['menu_category']         = $categoryAdminService;
        $this->map['module']                = $moduleAdminService;
        $this->map['module_category']       = $categoryAdminService;
        $this->map['product_parent_category'] = $productCategoryAdminService;
        $this->map['product_child_category']  = $productCategoryAdminService;
        $this->map['product_category']      = $productCategoryAdminService;
        $this->map['solution_category']     = $itemAdminService;
        $this->map['industry_category']     = $itemAdminService;
        $this->map['site']                  = $siteAdminService;
        $this->map['user_group']            = $groupAdminService;
        $this->map['viewlevel']             = $viewlevelAdminService;
        $this->map['memorabilia_year']      = $extrafieldGroupAdminService;
        $this->map['document_type']         = $extrafieldGroupAdminService;
        $this->map['company_category']      = '';
        $this->map['newsletter_category']   = $itemAdminService;
        $this->map['download_file_category'] = $fileCategoryAdminService;
        $this->map['contract_file_category'] = $fileCategoryAdminService;
        $this->map['front_user_group']            = $groupAdminService;
        $this->map['admin_user_group']            = $groupAdminService;
    }


    public function mergeList(Collection $input)
    {
        $data = [];

        foreach ($input->get('types') as $type)
        {
            $service = $this->map[$type];
            $q = new QueryCapsule();
            if ($type == 'asset') {
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]), []);
            } elseif ($type == 'brand') {
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    ['q' => $q->where('state', 1), 'limit' => 0]
                ));
            } elseif ($type == 'extension') {
                $data[$type] = $service;
            } elseif ($type == 'extrafield_group') {
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q]), ['extrafields']);
            } elseif ($type == 'item_article_category') {
                $q = $q->where('extension', 'item')->where('content_type', 'article');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]));
            } elseif ($type == 'item_category') {
                $q = $q->where('extension', 'item');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]));
            } elseif ($type == 'item_content_type') {
                $data[$type] = $service;
            } elseif ($type == 'language') {
                $q = $q->where('type', 'content');
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q]), ['sef']);
            } elseif ($type == 'menu') {
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]));
            } elseif ($type == 'menu_category') {
                $q = $q->where('extension', 'menu');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]));
            } elseif ($type == 'module') {
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q]));
            } elseif ($type == 'module_category') {
                $q = $q->where('extension', 'module')
                    ->where('title', '!=', 'ROOT');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]) , ['alias']);
            } elseif ($type == 'product_category') {
                $data[$type] = $this->getOptionList($service, 'tree', collect(
                    ['q' => $q->where('state', 1), 'limit' => 0]
                ));
            } elseif ($type == 'product_parent_category') {
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    ['q' => $q->where('state', 1)->where('parent_id', null), 'limit' => 0]
                ));
            } elseif ($type == 'product_child_category') {
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    ['q' => $q->where('state', 1)->where('parent_id', '!=', null), 'limit' => 0]
                ));
            } elseif ($type == 'solution_category') {
                $q = $q->orderBy('id', 'asc');
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    [
                        'q' => $q->where('state', 1),
                        'content_type' => 'solution_category',
                        'limit' => 0
                    ]
                ));
            } elseif ($type == 'industry_category') {
                $q = $q->orderBy('id', 'asc');
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    [
                        'q' => $q->where('state', 1),
                        'content_type' => 'industry_category',
                        'limit' => 0
                    ]
                ));
            } elseif ($type == 'site') {
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q]), ['url']);
            } elseif ($type == 'user_group') {
                $q = $q->where('title', '!=', 'ROOT');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'viewlevel') {
                $user = $this->getUser();
                $q = $q->whereIn('id', $user->accessIds);
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'memorabilia_year') {
                $ex = Extrafield::where('content_type', 'memorabilia')->where('alias', 'year')->first();
                if ($ex) {
                    $years = ExtrafieldValue::where('extrafield_id', $ex->id)->get();
                    $data[$type] = $years->map(function ($y) {
                        return $y->value;
                    })->unique()->values();
                } else {
                    $data[$type] = [];
                }
            } elseif ($type == 'document_type') {
                $ex = Extrafield::where('content_type', 'stockholder')->where('alias', 'document_type')->first();
                if ($ex) {
                    $data[$type] = $ex->params['option'];
                } else {
                    $data[$type] = [];
                }
            } elseif ($type == 'company_category') {
                $cc = CompanyCategory::all()->toTree();
                $data[$type] = $cc;
            } elseif ($type == 'newsletter_category') {
                $q = $q->orderBy('id', 'asc');
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    [
                        'q' => $q->where('state', 1),
                        'content_type' => 'newsletter_category',
                        'limit' => 0
                    ]
                ));
            } elseif ($type == 'download_file_category') {
                $q = $q->where('contentType', 'file');
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'contract_file_category') {
                $q = $q->where('contentType', 'contract');
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'front_user_group') {
                $register = $service->findBy('title', '=', 'Registered')->first();
                $root = $register->only(['id', 'title']);
                foreach ($register->descendants as $descendant) {
                    $root['children'][] = $descendant->only(['id', 'title']);
                }
                $data[$type] = $root;
            } elseif ($type == 'admin_user_group') {
                $admin = $service->findBy('title', '=', 'Administrator')->first();
                $temp = [];
                foreach ($admin->descendants as $descendant) {
                    $temp[] = $descendant->only(['id', 'title']);
                }
                $data[$type] = $temp;
            }
        }

        $this->status = 'GetListSuccess';
        $this->response = $data;

        return true;
    }

    /**
     * @param $service CategoryAdminService
     * @param $type string
     * @param array $extra_rules
     * @param array $extra_fields
     * @return mixed
     */
    public function getOptionList($service, $type, $input, $extra_fields = [])
    {
        if ($type == 'tree') {
            $default_field = array_merge($extra_fields, ['id', 'tree_list_title']);
            return $service->search($input)//->toFlatTree()
                ->map( function($item, $key) use ($default_field){
                    return $item->only($default_field);
                });
        } else {
            $default_field = array_merge($extra_fields, ['id', 'title']);
            return $service->search($input)
                ->map( function($item, $key) use ($default_field) {
                    return $item->only($default_field);
                });
        }
    }
}
