<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use Carbon\Carbon;
use DaydreamLab\Cms\Events\Hit;
use DaydreamLab\Cms\Events\Search;
use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use DaydreamLab\User\Services\User\Front\UserGroupFrontService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    protected $categoryFrontService;

    protected $userGroupFrontService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(
        ItemFrontRepository $repo,
        CategoryFrontService $categoryFrontService,
        UserGroupFrontService $userGroupFrontService
    )
    {
        $this->categoryFrontService  = $categoryFrontService;
        $this->userGroupFrontService = $userGroupFrontService;

        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getCategoriesItemsModule($params)
    {
        $result = $this->repo->getCategoriesItemsModule($params);

        // 代表有分類的切割
        if (gettype($result) == 'array') {
            foreach ($result as $key => $items) {
                if (!$items instanceof Collection) {
                    foreach ($items as $index => $objects) {
                        $result[$key][$index] = $objects;
                    }
                }

            }
        } else {
            if ($result->count() > 0) {
                $content_type = $result[0]->category->content_type;
                if ($content_type == 'timeline') {
                    $data = [];
                    foreach ($result as $item) {
                        foreach ($item->extrafields as $extrafield) {
                            if (array_key_exists('timeline', $extrafield->params) && (int) $extrafield->params['timeline'] == 1) {
                                $time  = Carbon::parse($extrafield->value);
                                $units = explode('-', $extrafield->params['format']);

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
        if (count($units) == 0) {
            $temp['title']       = $item['title'];
            $temp['description'] = $item['description'];
            foreach ($item->extrafields as $extrafield) {
                if (!array_key_exists('timeline', $extrafield->params) || (int) $extrafield->params['timeline'] == 0) {
                    $temp['extrafields'][] = $extrafield;
                }
            }
            $data[(int) $datetime->format($unit)][] = $temp;
            krsort($data);
            return $data;
        } else {
            if (!array_key_exists($datetime->format($unit), $data)) {
                $date[$datetime->format($unit)] = [];
            }

            return $this->filterByDatetimeFormat($data[(int) $datetime->format($unit)], $units, $datetime, $item);
        }
    }


    public function getItem($id, $diff = false)
    {
        $item = parent::getItem($id, $diff);

        $this->canAccess($item->access, $this->access_ids);

        if ($item) {
            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous = $prev_and_next['previous'];
            $item->next     = $prev_and_next['next'];
            $this->response = $item;
            return $item;
        }
        return false;
    }


    public function getItemsByCategoryIds($params)
    {
        $items = $this->repo->getItemsByCategoryIds($params);

        $data = $this->paginationFormat($items->toArray());

        return $data;
    }


    public function getItemByAlias(Collection $input)
    {
        $items = $this->search($input, false);

        if ($items->count()) {
            $item = $items->first();
            Hit::dispatch($item);

            $this->canAccess($item->access, $this->access_ids);

            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous = $prev_and_next['previous'];
            $item->next     = $prev_and_next['next'];
            $this->status   = Str::upper(Str::snake($this->type . 'GetItemSuccess'));
            $this->response = $item;
        } else {
            $this->status   = Str::upper(Str::snake($this->type . 'ItemNotExist'));
            $this->response = null;
        }

        return $this->response;
    }


    public function getNext(Collection $input)
    {
        $next_id = $this->repo->getPreviousOrNext($input, false);
        if ($next_id) {
            return $this->getItem($next_id);
        } else {
            $this->status   = Str::upper(Str::snake($this->type . 'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getPrevious(Collection $input)
    {
        $previous_id = $this->repo->getPreviousOrNext($input, true);

        if ($previous_id) {
            return $this->getItem($previous_id);
        } else {
            $this->status   = Str::upper(Str::snake($this->type . 'ItemNotExist'));
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
        $special_queries = [];
        // 取得後門的 special queries
        if ($input->get('special_queries')) {
            $special_queries = array_merge($special_queries, $input->get('special_queries'));
        }
        // 取得年份 special queries
        if ($input->get('year')) {
            $year = $input->year;
            $input->forget('year');
            $obj['type']       = 'whereYear';
            $obj['key']        = 'publish_up';
            $obj['value']      = $year;
            $special_queries[] = $obj;
        }
        // 取得月份 special queries
        if ($input->get('month')) {
            $month = $input->month;
            $input->forget('month');
            $obj['type']       = 'whereMonth';
            $obj['key']        = 'publish_up';
            $obj['value']      = $month;
            $special_queries[] = $obj;
        }

        // 取得文章類型 special queries
        if (config('cms.item.use_word_segmentation') == false) {
            $category_ids = $this->categoryFrontService
                ->getContentTypeItems()
                ->pluck('id')
                ->all();

            $obj['type']       = 'whereIn';
            $obj['key']        = 'category_id';
            $obj['value']      = $category_ids;
            $special_queries[] = $obj;
        }

        return $special_queries;
    }


    public function getSearchFilter($items)
    {
        $filters = [];

        foreach ($items as $item) {
            $item_publish_up = Carbon::parse($item['publish_up']);
            $item_year       = (int) $item_publish_up->format('Y');
            $item_month      = (int) $item_publish_up->format('m');

            $find_year = false;
            foreach ($filters as $key => $filter) {
                if ($filter['year'] == $item_year) {
                    $find_year = true;
                    if (in_array($item_month, $filter['month'])) {
                        break;
                    } else {
                        $filters[$key]['month'][] = $item_month;
                        break;
                    }
                }
            }

            $obj = [];
            if (!$find_year) {
                $obj['year']    = $item_year;
                $obj['month'][] = $item_month;
                $filters[]      = $obj;
            }
        }

        usort($filters, function ($a, $b) {
            return strcmp($b['year'], $a['year']);
        });

        return $filters;
    }


    public function search(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $special_queries = $this->getSpecialQueries($input);

        $language = $input->get('language') != ''
            ? [$input->get('language')]
            : ['*', config('global.locale')];

        // 如果有傳 category_alias
        if (!InputHelper::null($input, 'category_alias')) {
            $category_ids = $this->categoryFrontService->search(Helper::collect([
                'special_queries' => [
                    [
                        'type'  => 'whereIn',
                        'key'   => 'alias',
                        'value' => $input->get('category_alias'),
                    ],
                    [
                        'type'  => 'whereIn',
                        'key'   => 'language',
                        'value' => $language
                    ]
                ],
                'paginate'        => false
            ]))
               ->pluck('id')
               ->all();

            $special_queries[] = [
                'type'  => 'whereIn',
                'key'   => 'category_id',
                'value' => $category_ids
            ];

            $input->forget('category_alias');
        }

        $input->forget('special_queries');
        $input->put('special_queries', $special_queries);
        $input->put('state', 1);
        $copy = Helper::collect($input->toArray());

        $items = parent::search($input);

        $data = $this->paginationFormat($items->toArray());

        if (config('cms.item.front.search_filter')) {
            $copy->forget('paginate');
            $copy->forget('search');
            $copy->put('paginate', false);
            $temp           = parent::search($copy);
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

    /**
     * html to pdf and render on browser or download
     * @param Collection $input
     * @return mixed
     * @throws \Mpdf\MpdfException
     */
    public function download(Collection $input)
    {
        $mpdf = new\Mpdf\Mpdf ([
            "autoScriptToLang" => true,
            "autoLangToFont"   => true,
            "useSubstitutions" => true,
        ]);

        $item = $this->checkItemByAlias($input->get('alias'));

        if ($item->state == 0 || $item->access == 0) {
            return ResponseHelper::response(
                Str::upper(Str::snake($this->type . 'ItemNotExist')),
                null
            );
        }

        $table = $this->getTable($item);

        $mpdf->writeHTML($table);

        $filename = $item->title . '.pdf';

        // if just want to show on browser, do not pass parameter 1 and 2 (ex: filename and dest)
        // like $mpdf->Output();
//                return $mpdf->Output();
        return $mpdf->Output($filename, 'd');
    }

    /**
     * 取得item description內的表格
     * @param $item
     * @return mixed
     */
    private function getTable($item)
    {
        preg_match_all('/<table[\s]*(.*)?>([\s\S]*)<\/table>/m', $item->description, $matches);

        $table = $matches[0][0];

        $table = str_replace(
            [
                '<td',
                '<th',
                '<tr'
            ],
            [
                '<td style="vertical-align: middle;  text-align:center; padding: 6px"',
                '<th style="background:#f2f8f9"',
                '<tr style="border:1px solid #6C6E76;"'
            ],
            $table
        );

        return $table;
    }
}
