<?php
namespace DaydreamLab\Cms\Services\Item\Front;

use Carbon\Carbon;
use DaydreamLab\Cms\Events\Search;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Brand\Front\BrandFrontService;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use DaydreamLab\Dsth\Resources\Event\Front\Collections\EventFrontSearchResourceCollection;
use DaydreamLab\Dsth\Resources\Event\Front\Models\EventFrontSearchResource;
use DaydreamLab\Dsth\Services\Event\Front\EventFrontService;
use DaydreamLab\Dsth\Services\EventSession\Front\EventSessionFrontService;
use DaydreamLab\JJAJ\Exceptions\ForbiddenException;
use DaydreamLab\Media\Services\File\Front\FileFrontService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Services\User\Front\UserGroupFrontService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'Front';

    protected $categoryFrontService;

    protected $userGroupFrontService;


    public function __construct(ItemFrontRepository $repo,
                                CategoryFrontService $categoryFrontService,
                                UserGroupFrontService $userGroupFrontService)
    {
        $this->categoryFrontService = $categoryFrontService;
        $this->userGroupFrontService = $userGroupFrontService;

        parent::__construct($repo);
        $this->repo = $repo;

        Collection::macro('buildContentResourceData', function () {
            return $this->map(function ($i) {
                $map = $i->only(['title', 'alias', 'introimage', 'introtext', 'description', 'featured', 'featured_ordering', 'extrafields', 'category_alias', 'category_title']);
                $map['brands'] = $i->brands->map(function ($b) {
                    return $b->only(['alias', 'title', 'logo_image', 'contact']);
                });
                $map['publish_up'] = Carbon::parse($i->publish_up, config('app.timezone'))->tz('Asia/Taipei')->format('Y-m-d H:i:s');
                return $map;
            });
        });
    }


    public function getCategoriesItemsModule($params)
    {
        $result  = $this->repo->getCategoriesItemsModule($params);

        // 代表有分類的切割
        if (gettype($result) == 'array')
        {
            foreach ($result as $key => $items)
            {
               if (!$items instanceof Collection)
               {
                   foreach ($items as $index => $objects)
                   {
                       $result[$key][$index] = $objects;
                   }
               }
            }
        }
        else
        {
            if ($result->count() > 0)
            {
                $content_type = $result[0]->category->content_type;
                if ($content_type == 'timeline')
                {
                    $data = [];
                    foreach ($result as $item)
                    {
                        foreach ($item->extrafields as $extrafield)
                        {
                            if (array_key_exists('timeline', $extrafield->params) && (int)$extrafield->params['timeline'] == 1)
                            {
                                $time   = Carbon::parse($extrafield->value);
                                $units  = explode('-', $extrafield->params['format']);

                                $this->filterByDatetimeFormat($data, $units, $time, $item);
                            }
                        }
                    }
                    krsort($data);

                    $result = $data;
                }
            }
        }

        return $result;
    }


    public function filterByDatetimeFormat(&$data, $units, $datetime, $item)
    {
        $unit = array_shift($units);
        if (count($units) == 0)
        {   $temp['title'] = $item['title'];
            $temp['description'] = $item['description'];
            foreach ($item->extrafields as $extrafield)
            {
                if (!array_key_exists('timeline', $extrafield->params) || (int)$extrafield->params['timeline'] == 0)
                {
                    $temp['extrafields'][] = $extrafield;
                }
            }
            $data[(int)$datetime->format($unit)][] = $temp;
            krsort($data);
            return $data;
        }
        else
        {
            if (!array_key_exists($datetime->format($unit), $data))
            {
                $date[$datetime->format($unit)] = [];
            }

            return $this->filterByDatetimeFormat($data[(int)$datetime->format($unit)], $units, $datetime, $item);
        }
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        $this->canAccess($item->access);

        if ($item)
        {
            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous =  $prev_and_next['previous'];
            $item->next     =  $prev_and_next['next'];
            $this->response = $item;
            return $item;
        }
        return false;
    }


    public function getItemsByCategoryIds($params)
    {
        $items  = $this->repo->getItemsByCategoryIds($params);

        $data = $this->paginationFormat($items->toArray());

        return $data;
    }


    public function getItemByAlias(Collection $input)
    {
        $item = $this->search($input, false)->first();
        if ($item) {
            $this->update($item, collect($item->toArray()));

            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous = $prev_and_next['previous'];
            $item->next     = $prev_and_next['next'];
            $this->status   = 'GetItemSuccess';
            $this->response = $item;
        } else {
            throw new NotFoundException('ItemNotExist', ['alias' => $input->get('alias')]);
        }

        return $this->response;
    }


    public function getNext(Collection $input)
    {
        $next_id = $this->repo->getPreviousOrNext($input, false);
        if ($next_id)
        {
            return $this->getItem($next_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getPrevious(Collection $input)
    {
        $previous_id = $this->repo->getPreviousOrNext($input, true);

        if ($previous_id)
        {
            return $this->getItem($previous_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getSelectedItems($params)
    {
        $items = $this->repo->getSelectedItems($params);

        return $items;
    }


    public function getSpecialQueries(Collection $input)
    {
        $q = $input->get('q');

        // 取得年份 special queries
        if (!InputHelper::null($input, 'year')) {
            $year = $input->get('year');
            $input->forget('year');
            $q = $q->whereYear('publish_up', $year);
        }

        // 取得月份 special queries
        if (!InputHelper::null($input, 'month')) {
            $month = $input->get('month');
            $input->forget('month');
            $q = $q->whereMonth('publish_up', $month);
        }

        return $q;
    }


    public function getSearchFilter($items)
    {
        $filters = [];

        foreach ($items as $item)
        {
            $item_publish_up = Carbon::parse($item['publish_up']);
            $item_year       = (int)$item_publish_up->format('Y');
            $item_month      = (int)$item_publish_up->format('m');

            $find_year = false;
            foreach ($filters as $key => $filter)
            {
                if($filter['year'] == $item_year)
                {
                    $find_year  = true;
                    if (in_array($item_month, $filter['month']))
                    {
                        break;
                    }
                    else
                    {
                        $filters[$key]['month'][] = $item_month;
                        break;
                    }
                }
            }

            $obj = [];
            if (!$find_year)
            {
                $obj['year']    = $item_year;
                $obj['month'][] = $item_month;
                $filters[]      = $obj;
            }
        }

        usort($filters, function ($a, $b){
            return strcmp($b['year'],$a['year']);
        });

        return $filters;
    }


    public function search(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $q = $this->getSpecialQueries($input);
        $language = $input->get('language') != ''
            ? [$input->get('language')]
            : ['*',config('daydreamlab.global.locale')];

        // 如果有傳 category_alias
        if (!InputHelper::null($input, 'category_alias')) {

            $c_q = new QueryCapsule();
            $c_q = $c_q->whereIn('alias', $input->get('category_alias'))->whereIn('language', $language);
            $category_ids = $this->categoryFrontService->search(Helper::collect([
                'q' => $c_q,
                'paginate' => false
            ]))->map(function ($item, $key) {
                return $item->id;
            })->all();

            $q = $q->whereIn('category_id', $category_ids);

            $input->forget('category_alias');
        }

        $input->put('state', 1);
        $input->put('q', $q);
        $copy = Helper::collect($input->toArray());

        $items = parent::search($input);

        $data = $this->paginationFormat($items->toArray());

        if (config('cms.item.front.search_filter'))
        {
            $copy->forget('paginate');
            $copy->forget('search');
            $copy->put('paginate', false);
            $temp = parent::search($copy);
            $data['filter'] = $this->getSearchfilter($temp);
        }

        $this->response = $data;

        event(new Search($input, $this->user));

        return $items;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }

    /* ------------------------------------------- 新加的 ------------------------------------------- */
    public function checkDealerOnly($item)
    {
        if ( $item->extrafields && isset($item->extrafields['dealer_only']) && $item->extrafields['dealer_only']['value'] == 1 ) {
            $user = $this->getUser();
            if (!$user) {
                return false;
            }
            $userGroup = UserGroup::where('title', '經銷會員')->first();
            if (!in_array($userGroup->id, $user->accessIds)) {
                return false;
            }
        }
        return true;
    }

    public function getContentByAlias(Collection $input)
    {
        $content = $this->repo->findBy('alias', '=', $input->get('alias'))->first();
        if ($content) {
            if ( !$this->checkDealerOnly($content) ) {
                throw new ForbiddenException('InsufficientPermissionView', [
                    $this->repo->getModel()->getPrimaryKey() => $input->get('alias')
                ], null, $this->modelName);
            }
            if ($brand = $input->get('brand')) {
                $prevAndNext = $this->repo->getPreviousAndNextInBrand($content, $brand);
            } else {
                $prevAndNext = $this->repo->getPreviousAndNext($content);
            }
            $content->previous = $prevAndNext['previous'];
            $content->next     = $prevAndNext['next'];
            $this->status   = 'GetItemSuccess';
            $this->response = $content;
        } else {
            throw new NotFoundException('ItemNotExist', [
                $this->repo->getModel()->getPrimaryKey() => $input->get('alias')
            ], null, $this->modelName);
        }
        return $this->response;
    }


    public function getFinance()
    {
        $fins = $this->searchContent(collect(['content_type' => 'finance', 'limit' => 0, 'q' => new QueryCapsule()]));
        $filter_list = [];
        foreach ($fins as $fin) {
            $year = $fin->extrafields['year']['value'];
            $filter_list[$year][] = $fin->only(['title', 'description', 'extrafields', 'files']);
        }

        ksort($filter_list);

        foreach ($filter_list as $k => $data) {
            $filter_list[$k] = collect($data)->sortByDesc('title')->values()->all();
        }

        $this->response = $filter_list;
        return $filter_list;
    }


    public function getMemorabilia()
    {
        $mems = $this->searchContent(collect(['content_type' => 'memorabilia', 'limit' => 0, 'q' => new QueryCapsule()]));
        $filter_list = [];
        foreach ($mems as $mem) {
            $year = $mem->extrafields['year']['value'];
            $month = $mem->extrafields['month']['value'];
            $filter_list[$year][$month][] = $mem->only(['title', 'description', 'extrafields']);
        }

        foreach ($filter_list as &$year_col) {
            ksort($year_col);
        }
        krsort($filter_list); # 年份近到遠

        $this->response = $filter_list;
        return $filter_list;
    }


    public function getRules()
    {
        $rules = $this->searchContent(collect(['content_type' => 'rules', 'limit' => 0, 'q' => new QueryCapsule()]));
        $this->response = $rules->map(function ($r) {
            return $r->only(['title', 'files']);
        })->toArray();
        return $this->response;
    }


    public function getStockholder()
    {
        $stocks = $this->searchContent(collect(['content_type' => 'stockholder', 'limit' => 0, 'q' => new QueryCapsule()]));
        $ex_dt = Extrafield::where('alias', 'document_type')->where('content_type', 'stockholder')->first();
        $filter_list = [];
        foreach ($ex_dt->params['option'] as $option) {
            $filter_list[$option['value']] = [];
        }
        foreach ($stocks as $stock) {
            $document_type = $stock->extrafields['document_type']['value'];
            $year = $stock->extrafields['year']['value'];
            $filter_list[$document_type][] = array_merge($stock->only(['title', 'files']), ['year' => (int)$year]);
        }
        foreach ($filter_list as &$type) {
            usort($type, function($a, $b) {
                return ($b['year'] - $a['year']);
            });
        }

        $this->response = $filter_list;
        return $filter_list;
    }


    /**
     * 處理精選文章耕非精選文章 response and paginate 資料
     * @param $featured
     * @param $notFeatured
     * @param $page
     * @param $limit
     * @return Collection
     */
    public function handleFeaturedAndNotFeaturedResponse($featured, $notFeatured, $page, $limit)
    {
        $paginateFeatured = $this->repo->paginate($featured, $limit, $page ?: 1, []);
        $featuredData = collect($paginateFeatured->items())->buildContentResourceData();

        $paginateNotFeatured = $this->repo->paginate($notFeatured, $limit, $page ?: 1, []);
        $notFeaturedData = collect($paginateNotFeatured->items())->buildContentResourceData();

        $paginateNotFeaturedToArray = $paginateNotFeatured->toArray();
        unset($paginateNotFeaturedToArray['data']);

        return collect([
            'featured' => $featuredData->take(2),
            'items' => $notFeaturedData,
            'pagination' => $paginateNotFeaturedToArray
        ]);
    }


    public function homepage()
    {
        Collection::macro('filterHomepageShow', function () {
            return $this->filter(function ($c) {
                return ($c->extrafields['top_page_show']['value'] == 1);
            })->values();
        });

        $slideshow = $this->searchContent(collect(['content_type' => 'slideshow', 'limit' => 0, 'q' => new QueryCapsule()]));
        $promotion = $this->searchContent(collect(['content_type' => 'promotion', 'limit' => 6, 'q' => new QueryCapsule()]))
            ->filterHomepageShow()
            ->buildContentResourceData();
        $bulletin = $this->searchContent(collect(['content_type' => 'bulletin', 'limit' => 6, 'q' => new QueryCapsule()]))
            ->filterHomepageShow()
            ->buildContentResourceData();

        $events = app(EventSessionFrontService::class)->searchEvent(collect(['limit' => 6]));

        $this->response = [
            'slideshow' => $slideshow,
            'promotion' => $promotion,
            'bulletin' => $bulletin,
            'events'   => $events->map(function ($event) {
                return new EventFrontSearchResource($event);
            })
        ];
    }


    public function searchContent(Collection $input, $paginate = true)
    {
        if ( $content_type = $input->get('content_type') ) {
            $q = $input->get('q');
            $categories = $this->categoryFrontService->findBy('alias', '=', $content_type);
            $category_ids = $categories->map(function ($c) {
                return $c->id;
            })->toArray();
            $q = $q->whereIn('category_id', $category_ids);
            $input->put('q', $q);
        }
        $input->forget('content_type');

        if ( $brand_alias = $input->get('brand_alias') ) {
            $brand_ids = [];
            foreach ($brand_alias as $ba) {
                $brand = Brand::where('alias', $ba)->first();
                if ($brand) {
                    $brand_ids[] = $brand->id;
                }
            }

            if ( count($brand_ids) ) {
                $q = $input->get('q');
                $q = $q->whereHas('brands', function ($query) use ($brand_ids) {
                    $query->whereIn('brands_items_maps.brand_id', $brand_ids);
                });
                $input->put('q', $q);
            }
        }
        $input->forget('brand_alias');

        $input->put('paginate', $paginate);
        $input->put('state', 1);

        $items = parent::search($input);

        $this->response = $items;

        event(new Search($input, $this->user));

        return $items;
    }


    public function searchSolution(Collection $input)
    {
        if ( $solution_category_alias = $input->get('solution_category_alias') ) {
            $item_ids = [];
            $sca_ex = Extrafield::where('alias', 'solution_category')->where('content_type', 'solution')->first();
            foreach ($solution_category_alias as $sca) {
                $sc = $this->repo->findBy('alias', '=', $sca)->first();
                if ($sc) {
                    $exvs = ExtrafieldValue::where('extrafield_id', $sca_ex->id)->where('value', $sc->id)->get();
                    $item_ids = array_merge($item_ids, $exvs->pluck(['item_id'])->toArray());
                }
            }
            $q = $input->get('q');
            $q = $q->whereIn('id', $item_ids);
            $input->put('q', $q);
            $input->forget('solution_category_alias');
        }

        if ( $industry_category_alias = $input->get('industry_category_alias') ) {
            $item_ids = [];
            $ica_ex = Extrafield::where('alias', 'industry_category')->where('content_type', 'solution')->first();
            foreach ($industry_category_alias as $ica) {
                $ic = $this->repo->findBy('alias', '=', $ica)->first();
                if ($ic) {
                    $exvs = ExtrafieldValue::where('extrafield_id', $ica_ex->id)->get();
                    $exvs = $exvs->filter(function ($e) use ($ic) {
                        $values = array_map(function ($i) {
                            return $i['id'];
                        }, json_decode($e->value, true));
                        return in_array($ic->id, $values);
                    });
                    $item_ids = array_merge($item_ids, $exvs->pluck(['item_id'])->toArray());
                }
            }
            $q = $input->get('q');
            $q = $q->whereIn('id', $item_ids);
            $input->put('q', $q);
            $input->forget('industry_category_alias');
        }

        $input->put('content_type', 'solution');

        return $this->searchContent($input);
    }


    public function searchCase(Collection $input)
    {
        if ( $industry_category_alias = $input->get('industry_category_alias') ) {
            $item_ids = [];
            $ica_ex = Extrafield::where('alias', 'industry_category')->where('content_type', 'case')->first();
            foreach ($industry_category_alias as $ica) {
                $ic = $this->repo->findBy('alias', '=', $ica)->first();
                if ($ic) {
                    $exvs = ExtrafieldValue::where('extrafield_id', $ica_ex->id)->get();
                    $exvs = $exvs->filter(function ($e) use ($ic) {
                        return ($ic->id == $e->value);
                    });
                    $item_ids = array_merge($item_ids, $exvs->pluck(['item_id'])->toArray());
                }
            }
            $q = $input->get('q');
            $q = $q->whereIn('id', $item_ids);
            $input->put('q', $q);
            $input->forget('industry_category_alias');
        }

        $input->put('content_type', 'case');

        return $this->searchContent($input);
    }


    public function searchBulletin(Collection $input)
    {
        $search_date = $input->get('search_date');
        $input->forget('search_date');
        $limit = $input->get('limit');
        $page = $input->get('page');

        list($featured, $notFeatured) = $this->searchFeatureContent($input, 'bulletin');

        if ($search_date) {
            $split = explode('/', $search_date, 2);
            $searchYear = (int)$split[0];
            $searchMonth = (int)$split[1];
            $notFeatured = $notFeatured->filter(function ($v) use ($searchYear, $searchMonth) {
                $registerStart = $v['extrafields']['register_start']['value'];
                $registerEnd = $v['extrafields']['register_end']['value'];
                if ($registerStart) {
                    $registerStart = Carbon::parse($registerStart, 'Asia/Taipei');
                    if ($registerEnd) {
                        $registerEnd = Carbon::parse($registerEnd, 'Asia/Taipei');
                        return ($registerStart->year <= $searchYear && $registerStart->month <= $searchMonth)
                            && ($registerEnd->year >= $searchYear && $registerEnd->month >= $searchMonth);
                    } else {
                        return ($registerStart->year <= $searchYear && $registerStart->month <= $searchMonth);
                    }
                } else {
                    if ($registerEnd) {
                        $registerEnd = Carbon::parse($registerEnd, 'Asia/Taipei');
                        return ($registerEnd->year >= $searchYear && $registerEnd->month >= $searchMonth);
                    } else {
                        return false;
                    }
                }
            })->values();
        }

        $this->response = $this->handleFeaturedAndNotFeaturedResponse($featured, $notFeatured, $page ?: 1, $limit);

        return $this->response;
    }


    public function searchPromotion(Collection $input)
    {
        $search_date = $input->get('search_date');
        $input->forget('search_date');
        $limit = $input->get('limit');
        $page = $input->get('page');

        list($featured, $notFeatured) = $this->searchFeatureContent($input, 'promotion');

        if ($search_date) {
            $split = explode('/', $search_date, 2);
            $searchYear = (int)$split[0];
            $searchMonth = (int)$split[1];
            $notFeatured = $notFeatured->filter(function ($v) use ($searchYear, $searchMonth) {
                $registerStart = $v['extrafields']['register_start']['value'];
                $registerEnd = $v['extrafields']['register_end']['value'];
                if ($registerStart) {
                    $registerStart = Carbon::parse($registerStart, 'Asia/Taipei');
                    if ($registerEnd) {
                        $registerEnd = Carbon::parse($registerEnd, 'Asia/Taipei');
                        return ($registerStart->year <= $searchYear && $registerStart->month <= $searchMonth)
                            && ($registerEnd->year >= $searchYear && $registerEnd->month >= $searchMonth);
                    } else {
                        return ($registerStart->year <= $searchYear && $registerStart->month <= $searchMonth);
                    }
                } else {
                    if ($registerEnd) {
                        $registerEnd = Carbon::parse($registerEnd, 'Asia/Taipei');
                        return ($registerEnd->year >= $searchYear && $registerEnd->month >= $searchMonth);
                    } else {
                        return false;
                    }
                }
            })->values();
        }

        $this->response = $this->handleFeaturedAndNotFeaturedResponse($featured, $notFeatured, $page ?: 1, $limit);

        return $this->response;
    }


    public function searchVideo(Collection $input)
    {
        $search_date = $input->get('search_date');
        $input->forget('search_date');
        $limit = $input->get('limit');
        $page = $input->get('page');

        list($featured, $notFeatured) = $this->searchFeatureContent($input, 'video');

        if ($search_date) {
            $split = explode('/', $search_date, 2);
            $searchYear = (int)$split[0];
            $searchMonth = (int)$split[1];
            $notFeatured = $notFeatured->filter(function ($v) use ($searchYear, $searchMonth) {
                $publishUp = Carbon::parse($v['publish_up'], 'Asia/Taipei');

                return $publishUp->year == $searchYear && $publishUp->month == $searchMonth;
            })->values();
        }

        $this->response = $this->handleFeaturedAndNotFeaturedResponse($featured, $notFeatured, $page ?: 1, $limit);

        return $this->response;
    }


    public function searchSite(Collection $input)
    {
        $brandSer = app(BrandFrontService::class);
        $productSer = app(ProductFrontService::class);
        $fileSer = app(FileFrontService::class);
        $eventSer = app(EventFrontService::class);

        $tag = $input->get('tag');
        $input->forget('tag');
        $types = $input->get('type');
        $input->forget('type');
        $limit = $input->get('limit');
        $input->put('limit', 0);
        $page = $input->get('page');
        $input->forget('page');

        $response = collect([]);
        if ( count($types) ) {
            foreach ($types as $type) {
                $input->put('q', new QueryCapsule()); // 要重置q 不然會留著上一個for loop search 用到的
                if ($type == 'brand') {
                    $response = $response->merge($brandSer->search($input));
                } elseif ($type == 'file') {
                    $input->put('searchKeys', ['name', 'description']);
                    $response = $response->merge($fileSer->search($input, false));
                } elseif ($type == 'event' || $type == 'course') {
                    $response = $response->merge($eventSer->search($input, false));
                } else {
                    $input->put('q', (new QueryCapsule())->with('category'));
                    $items = $this->searchContent($input, false);
                    foreach ($items as $item) {
                        $content_type = $item->category->content_type;
                        if ($type == 'news') {
                            if (in_array($content_type, ['bulletin', 'promotion'])) {
                                $response->push($item);
                            }
                        } else {
                            if ($content_type == $type) {
                                $response->push($item);
                            }
                        }
                    }
                }
            }
        } else {
            $itemSearchData = $input->toArray();
            $itemSearchData['q'] = (new QueryCapsule())->with('category', 'brands');
            $items = $this->searchContent(collect($itemSearchData), false)->filter(function ($i) {
                return in_array($i->category->content_type, ['solution', 'case', 'video', 'bulletin', 'promotion']);
            })->values();

            $brandSearchData = $input->toArray();
            $brandSearchData['q'] = (new QueryCapsule())->with('items');
            $brands = $brandSer->search(collect($brandSearchData));

            $eventSearchData = (clone $input)->toArray();
            $eventSearchData['q'] = (new QueryCapsule())->with('brands');
            $events = $eventSer->search(collect($eventSearchData));


            $productSearchData = (clone $input)->toArray();
            $productSearchData['searchKeys'] = ['title', 'description'];
            $productSearchData['q'] =  (new QueryCapsule())->with('brands');
            $products = $productSer->search(collect($productSearchData), false);
            $input->put('searchKeys', ['name', 'description']);

            $filesSearchData = $input->toArray();
            $filesSearchData['q'] =  (new QueryCapsule())->with('brands');
            $files = $fileSer->search(collect($filesSearchData), false);

            $response = $response->merge($items);
            $response = $response->merge($brands);
            $response = $response->merge($events);
            $response = $response->merge($products);
            $response = $response->merge($files);
        }

        # 過濾 tag
        if ($tag) {
            $response = $response->filter(function ($r) use ($tag) {
                $hasTag = $r->isRelation('tags') ? $r->tags()->where('alias', $tag)->first() : null;
                return ($hasTag) ? true : false;
            })->values();
        }

        $response = $response->map(function ($i) {
            $data = $i->only(['title', 'alias', 'introtext', 'description']);
            $table = $i->getTable();
            if ($table == 'files') {
                $data['title'] = $i->name;
                $data['contentType'] = 'file';
                $data['brands'] = $i->brands->map(function ($b) { return $b->alias; });
                $data['downloadLink'] = $i->downloadLink;
                $data['linkType'] = $i->params['upload'];
                $data['webLink'] = $i->web_url;
                $data['size'] = $i->size;
                if ( in_array($i->category->extension, ['finance', 'rules', 'stockholder']) ) {
                    $data['userGroupId'] = 1;
                } else {
                    $data['userGroupId'] = $i->userGroupId;
                }
            } elseif ($table == 'brands') {
                $data['contentType'] = 'brand';
                $data['brands'] = [];
                $data['userGroupId'] = 1;
            } elseif ($table == 'events') {
                $data['contentType'] = 'event';
                $data['brands'] = $i->brands->map(function ($b) { return $b->alias; });
                $data['seriesNum'] = $i->dates->pluck('seriesNum')->first();
                $data['userGroupId'] = $i->canRegisterGroup;
            } elseif ($table == 'products') {
                $data['contentType'] = 'product';
                $data['brands'] = $i->brands->map(function ($b) { return $b->alias; });
                $data['userGroupId'] = 1;
            } elseif ($table == 'items') {
                $data['contentType'] = $i->category->content_type;
                $data['brands'] = $i->brands->map(function ($b) { return $b->alias; });
                $data['userGroupId'] = 1;
                if (in_array($data['contentType'], ['bulletin', 'promotion'])) {
                    $data['userGroupId'] = ( $i->extrafields['dealer_only']['value'] == 1 ) ? 6 : 7;
                }
            }
            return $data;
        });

        $this->status = 'SearchSuccess';
        $this->response = $this->repo->paginate($response, $limit, $page ?: 1, []);
        return $this->response;
    }


    protected function searchFeatureContent(Collection $input, $content_type)
    {
        $input->put('content_type', $content_type);
        $input->put('limit', 0);
        $input->forget('page');

        $params = $input->toArray();
        $params['featured'] = 0;

        $notFeatured = $this->searchContent(collect($params), false);

        unset($params['brand_alias']);
        unset($params['search']);
        unset($params['search_date']);
        $params['q'] = new QueryCapsule();
        $params['featured'] = 1;
        $featured = $this->searchContent(collect($params), false);

        return [
            $featured->sortBy(function ($f) {
                return $f['featured_ordering'];
            })->values(),
            $notFeatured
        ];
    }
}
