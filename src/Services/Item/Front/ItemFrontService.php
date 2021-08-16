<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use Carbon\Carbon;
use DaydreamLab\Cms\Events\Search;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
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

        $this->canAccess($item->access, $this->access_ids);

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
            $this->throwResponse('ItemNotExist', ['alias' => $input->get('alias')]);
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


    public function getContentByAlias(Collection $input)
    {
        $content = $this->repo->findBy('alias', '=', $input->get('alias'))->first();
        if ($content) {
            $prevAndNext = $this->repo->getPreviousAndNext($content);
            $content->previous = $prevAndNext['previous'];
            $content->next     = $prevAndNext['next'];
            $this->status   = 'GetItemSuccess';
            $this->response = $content;
        } else {
            $this->throwResponse('ItemNotExist', ['alias' => $input->get('alias')]);
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
        ksort($filter_list);

        $this->response = $filter_list;
        return $filter_list;
    }


    public function getRules()
    {
        $rules = $this->searchContent(collect(['content_type' => 'rules', 'limit' => 0, 'q' => new QueryCapsule()]));
        $this->response = $rules->map(function ($r) {
            return $r->only(['title', 'files']);
        });
        return $this->response;
    }


    public function getStockholder()
    {
        $stocks = $this->searchContent(collect(['content_type' => 'stockholder', 'limit' => 0, 'q' => new QueryCapsule()]));
        $filter_list = [];
        foreach ($stocks as $stock) {
            $document_type = $stock->extrafields['document_type']['value'];
            $year = $stock->extrafields['year']['value'];
            $filter_list[$document_type][] = array_merge($stock->only(['title', 'files']), ['year' => (int)$year]);
        }
        foreach ($filter_list as &$type) {
            usort($type, function($a, $b) {
                return ($a['year'] - $b['year']);
            });
        }

        $this->response = $filter_list;
        return $filter_list;
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
            $input->forget('brand_alias');
        }

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
                    $exvs = ExtrafieldValue::where('extrafield_id', $ica_ex->id)->where('value', $ic->id)->get();
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
}
