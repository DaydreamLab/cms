<?php

namespace DaydreamLab\Cms\Services\Option;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Brand\Front\BrandFront;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
use DaydreamLab\Cms\Services\Brand\Front\BrandFrontService;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Services\Menu\Front\MenuFrontService;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\Cms\Services\ProductCategory\Front\ProductCategoryFrontService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use DaydreamLab\Media\Services\FileCategory\Admin\FileCategoryAdminService;
use DaydreamLab\User\Models\Company\CompanyCategory;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\UserTag\Admin\UserTagAdminService;
use DaydreamLab\User\Services\UserTagCategory\UserTagCategoryService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class OptionService
{
    use LoggedIn;

    protected $modelName = 'Option';

    public $status;

    public $response;

    protected $map = [];

    public function __construct(
        CategoryAdminService $categoryAdminService,
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
        FileCategoryAdminService $fileCategoryAdminService,
        UserTagCategoryService $userTagCategoryService
    ) {
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
        $this->map['front_user_group']      = $groupAdminService;
        $this->map['admin_user_group']      = $groupAdminService;
        $this->map['usertag_category']     = $userTagCategoryService;
        $this->map['notification_category'] = $categoryAdminService;
    }


    public function mergeList(Collection $input)
    {
        $data = [];

        foreach ($input->get('types') ?: [] as $type) {
            $service = $this->map[$type];
            $q = new QueryCapsule();
            if ($type == 'asset') {
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]), []);
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
                $data[$type] = $this->getOptionList($service, 'tree', collect([
                    'q' => $q->orderBy('_lft', 'asc'),
                    'limit' => 0,
                    'paginate' => 0,
                ]));
            } elseif ($type == 'menu_category') {
                $q = $q->where('extension', 'menu');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]));
            } elseif ($type == 'module') {
                $data[$type] = $this->getOptionList($service, 'list', collect([
                    'q' => $q,
                    'limit' => 0,
                    'paginate' => 0,
                ]));
            } elseif ($type == 'module_category') {
                $q = $q->where('extension', 'module')
                    ->where('title', '!=', 'ROOT');
                $data[$type] = $this->getOptionList($service, 'tree', collect(['q' => $q]), ['alias']);
            } elseif ($type == 'brand') {
                $data[$type] = $this->getOptionList($service, 'list', collect(
                    ['q' => $q->where('state', 1)->orderBy('title', 'asc'), 'limit' => 0]
                ));
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
                $cc = CompanyCategory::whereIn('state', [0, 1])->orderBy('id', 'desc')->get()->toTree();
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
                $q = $q->where('contentType', 'file')->where('extension', null);
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'contract_file_category') {
                $q = $q->where('contentType', 'contract');
                $data[$type] = $this->getOptionList($service, 'list', collect(['q' => $q, 'limit' => 0]));
            } elseif ($type == 'front_user_group') {
                $register = $service->findBy('title', '=', 'Registered')->first();
                $root = $register->only(['id', 'title']);
                foreach ($register->descendants as $descendant) {
                    # 過濾掉無手機名單 (為了感覺好像是硬做的故意濾掉，未來如果加錢整合可以再拿掉)
//                    if ($descendant->title !== '無手機名單') {
                        $root['children'][] = $descendant->only(['id', 'title']);
//                    }
                }
                $data[$type] = $root;
            } elseif ($type == 'admin_user_group') {
                $admin = $service->findBy('title', '=', 'Administrator')->first();
                $temp = [];
                foreach ($admin->descendants as $descendant) {
                    $temp[] = $descendant->only(['id', 'title']);
                }
                $data[$type] = $temp;
            } elseif ($type == 'usertag_category') {
                $data['type'] = $service->search(collect(['paginate' => 0, 'limit' => 0]))
                    ->reject(function ($item) {
                        return $item->title == 'ROOT';
                    })->toTree();
                $data = Helper::recursiveMap($data['type'], function ($item) {return $item->only('id', 'title', 'children');});
            } elseif ($type == 'notification_category') {
                $data[$type] = $this->getOptionList($service, 'tree', collect([
                    'extension' => 'notification',
                    'paginate' => 0,
                    'limit' => 0
                ]))->reject(function ($category) {
                    return $category['tree_list_title'] == 'ROOT';
                })->values();
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
            return $service->search($input)->toFlatTree()
                ->map(function ($item, $key) use ($default_field) {
                    return $item->only($default_field);
                });
        } else {
            $default_field = array_merge($extra_fields, ['id', 'title']);
            return $service->search($input)
                ->map(function ($item, $key) use ($default_field) {
                    return $item->only($default_field);
                });
        }
    }


    public function frontOptionList(Collection $input)
    {
        $data = [];
        foreach ($input->get('types') ?: [] as $type) {
            switch ($type) {
                case 'brand':
                    $bser = app(BrandFrontService::class);
                    if ($pageAlias = $input->get('pageAlias')) {
                        if (in_array($pageAlias, ['promotion', 'bulletin', 'video'])) {
                            $category = Category::where('alias', $pageAlias)->first();
                            $brandMaps = DB::table('brands_items_maps')
                                ->select('brand_id')
                                ->whereIn('item_id', function ($q) use ($category) {
                                    {
                                    $q->select('id')
                                        ->from('items')
                                        ->where('category_id', $category->id);
                                    }
                                })
                                ->orderBy('brand_id')
                                ->get();

                            $brandIds = $brandMaps
                                ->pluck('brand_id')
                                ->unique()
                                ->all();
                            $brands = Brand::whereIn('id', $brandIds)->where('state', 1)->get();
                        } elseif ($pageAlias == 'event') {
                            $eventIds = DB::table('event_sessions')
                                ->select('eventId')
                                ->where('startTime', '>=', now('Asia/Taipei')->startOfDay()->tz(config('app.timezone'))->toDateTimeString())
                                ->groupBy('eventId')
                                ->get()
                                ->pluck('eventId')
                                ->all();
                            $brandMaps = DB::table('events_brands_maps')
                                ->select('brandId')
                                ->whereIn('eventId', $eventIds)
                                ->groupBy('brandId')
                                ->orderBy('brandId')
                                ->get();
                            $brandIds = $brandMaps
                                ->pluck('brandId')
                                ->all();
                            $brands = Brand::whereIn('id', $brandIds)->where('state', 1)->get();
                        } else {
                            $brands = $bser->getAllBrands();
                        }
                    } else {
                        $brands = $bser->getAllBrands();
                    }

                    $product_category_alias = $input->get('product_category_alias');
                    if (is_array($product_category_alias) && count($product_category_alias)) {
                        $brands = $brands->filter(function ($b) use ($product_category_alias) {
                            $pcs = $b->products->map(function ($p) {
                                return ($p->productCategory) ? $p->productCategory->alias : '';
                            })->unique(function ($p_alias) {
                                return $p_alias;
                            })->values()->toArray();
                            if (count(array_intersect($product_category_alias, $pcs))) {
                                return true;
                            }
                            return false;
                        });
                    }
                    $data[$type] = $brands->map(function ($b) {
                        return $b->only(['alias', 'title']);
                    })->sort(function ($a, $b) {
                        $aFirstLetter = strtoupper(substr($a['title'], 0, 1));
                        $bFirstLetter = strtoupper(substr($b['title'], 0, 1));

                        if ($aFirstLetter !== $bFirstLetter) {
                            return strcmp($aFirstLetter, $bFirstLetter);
                        }
                        return strcmp($a['title'], $b['title']);
                    })->values();
                    break;
                case 'city':
                    $cities = DB::table('events')
                        ->select('city')
                        ->whereNotNull('city')
                        ->whereIn('id', function ($q) {
                            $q->select('eventId')
                                ->from('event_sessions')
                                ->where('startTime', '>=', now('Asia/Taipei')->startOfDay()->tz(config('app.timezone'))->toDateTimeString())
                                ->groupBy('eventId');
                        })
                        ->groupBy('city')
                        ->get()
                        ->pluck('city')
                        ->all();
                    $data[$type] = DataHelper::usort($cities, DataHelper::cities_order);
                    break;
                case 'product_parent_category':
                    $brand_alias = $input->get('brand_alias');
                    if ($brand_alias != null) {
                        $brand = BrandFront::where('alias', '=', $brand_alias)->first();
                        $data[$type] = $brand->products->filter(function ($p) {
                            return $p->productCategory != null;
                        })->unique(function ($p) {
                            return $p->productCategory->id;
                        })->sortBy('product_category_id')->map(function ($p) {
                            return $p->productCategory->only(['alias', 'title']);
                        })->values();
                    } else {
                        $pcser = app(ProductCategoryFrontService::class);
                        $q = new QueryCapsule();
                        $ppcs = $pcser->search(collect(['q' => $q->with(['products', 'products.brands'])->where('state', 1)->where('parent_id', null), 'limit' => 0]), false);
                        $data[$type] = $ppcs->map(function ($pp) {
                            # map 出這些產品屬於的品牌
                            $brandsWithDuplicate = collect([]);
                            $pp->products->each(function ($p) use (&$brandsWithDuplicate) {
                                $brandsWithDuplicate = $brandsWithDuplicate->merge($p->brands);
                            });
                            $brands = $brandsWithDuplicate->where('state', 1)->unique(function ($b) {
                                return $b->id;
                            })->map(function ($m) {
                                return $m->only(['alias', 'title']);
                            })->sortBy('title')->values();
                            $pData = $pp->only(['alias', 'title', 'image']);
                            $pData['brands'] = $brands;
                            return $pData;
                        });
                    }
                    break;
                case 'product_child_category':
                    $pcser = app(ProductCategoryFrontService::class);
                    $q = new QueryCapsule();
                    $pccs = $pcser->search(collect(['q' => $q->where('state', 1)->where('parent_id', '!=', null), 'limit' => 0]), false);
                    $data[$type] = $pccs->map(function ($pc) {
                        return $pc->only(['alias', 'title']);
                    });
                    break;
                case 'solution_category':
                    $ifser = app(ItemFrontService::class);
                    $scs = $ifser->searchContent(collect(['content_type' => 'solution_category', 'q' => (new QueryCapsule())->with('category', 'extrafieldValues'), 'limit' => 0]), false);
                    $ics = $ifser->searchContent(collect(['content_type' => 'industry_category', 'q' => (new QueryCapsule())->with('category', 'extrafieldValues'), 'limit' => 0]), false);
                    $icsData = [];
                    foreach ($ics as $ic) {
                        $icsData[$ic->id] = $ic->only(['alias', 'title']);
                    }
                    $data[$type] = $scs->map(function ($sc) use ($icsData) {
                        $d = $sc->only(['alias', 'title', 'description', 'introimage']);
                        $icsArray = $sc->extrafields['industry_category']['value'];
                        $d['industry_category'] = array_map(function ($i) use ($icsData) {
                            return $icsData[$i['id']];
                        }, $icsArray);
                        return $d;
                    });
                    break;
                case 'industry_category':
                    $ifser = app(ItemFrontService::class);
                    $brand_alias = $input->get('brand_alias');
                    $content_type = $input->get('content_type');
                    if ($brand_alias != null && $content_type != null) {
                        $brand = BrandFront::where('alias', '=', $brand_alias)->first();
                        if ($brand) {
                            if ($content_type == 'case') {
                                $case_ind_ids = array_unique(array_map(function ($c) {
                                    return $c->extrafields['industry_category']['value'];
                                }, $brand->items['case']));
                                $q = new QueryCapsule();
                                $q->whereIn('id', $case_ind_ids);
                                $case_ics = $ifser->searchContent(collect(['content_type' => 'industry_category', 'q' => $q, 'limit' => 0]), false);
                                $data[$type] = $case_ics->map(function ($ic) {
                                    return $ic->only(['alias', 'title']);
                                });
                            } elseif ($content_type == 'solution') {
                                $sol_ind_ids = (new Collection(array_map(function ($c) {
                                    return  array_map(function ($v) {
                                        return $v['id'];
                                    }, $c->extrafields['industry_category']['value']);
                                }, $brand->items['solution'])))->flatten()->unique()->values()->toArray();
                                $q = new QueryCapsule();
                                $q->whereIn('id', $sol_ind_ids);
                                $sol_ics = $ifser->searchContent(collect(['content_type' => 'industry_category', 'q' => $q, 'limit' => 0]), false);
                                $data[$type] = $sol_ics->map(function ($ic) {
                                    return $ic->only(['alias', 'title']);
                                });
                            }
                        }
                    } else {
                        $ics = $ifser->searchContent(collect(['content_type' => 'industry_category', 'q' => new QueryCapsule(), 'limit' => 0]), false);
                        $data[$type] = $ics->map(function ($ic) {
                            return $ic->only(['alias', 'title']);
                        });
                    }
                    break;
                case 'download_file_category':
                    $fcser = app(FileCategoryAdminService::class);
                    $q = new QueryCapsule();
                    $fcs = $fcser->search(collect(['q' => $q->where('contentType', 'file')->where('extension', null)->where('state', 1), 'limit' => 0]), false);
                    $data[$type] = $fcs->map(function ($fc) {
                        return $fc->only(['alias', 'title']);
                    });
                    break;
                case 'contract_file_category':
                    $fcser = app(FileCategoryAdminService::class);
                    $q = new QueryCapsule();
                    $fcs = $fcser->search(collect(['q' => $q->where('contentType', 'contract')->where('state', 1), 'limit' => 0]), false);
                    $data[$type] = $fcs->map(function ($fc) {
                        return $fc->only(['alias', 'title']);
                    });
                    break;
                default:
                    $data[$type] = [];
                    break;
            }
        }

        $this->status = 'GetListSuccess';
        $this->response = $data;
        return true;
    }
}
