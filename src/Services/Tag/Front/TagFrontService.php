<?php

namespace DaydreamLab\Cms\Services\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\Front\TagFrontRepository;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Tag\TagService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class TagFrontService extends TagService
{
    protected $type = 'Front';

    protected $itemFrontService;


    public function __construct(TagFrontRepository $repo,
                                ItemFrontService $itemFrontService)
    {
        $this->itemFrontService = $itemFrontService;
        parent::__construct($repo);
    }


    public function getRelatedData($tags, $type = null)
    {
        $data = [
            'brand' => collect([]),
            'solution' => collect([]),
            'case' => collect([]),
            'course' => collect([]),
            'file' => collect([]),
            'news' => collect([]),
            'video' => collect([])
        ];
        foreach ($tags as $tag) {
            $brands = $tag->brands;
            foreach ($brands as $brand) {
                if ( !$data['brand']->contains('id', $brand->id) ) {
                    $data['brand']->push($brand);
                }
            }

            $files = $tag->files;
            foreach ($files as $file) {
                $data['file']->push($file);
            }

            $items = $tag->items;
            foreach ($items as $item) {
                $content_type = $item->category->content_type;
                if (in_array($content_type, ['bulletin', 'promotion'])) {
                    if ( !$data['news']->contains('id', $item->id) ) {
                        $data['news']->push($item);
                    }
                } else {
                    if ( isset($data[$content_type]) ) {
                        if ( !$data[$content_type]->contains('id', $item->id) ) {
                            $data[$content_type]->push($item);
                        }
                    }
                }
            }
        }

        if ($type) {
            $finalData = $data[$type];
        } else {
            $finalData = collect([]);
            foreach ($data as $key => $typeData) {
                if ($typeData->count() > 0) {
                    $finalData = $finalData->merge($typeData);
                }
            }
        }

        return $finalData;
    }


    public function getRelatedItems($tags)
    {
        $items_data = collect([]);
        foreach ($tags as $tag)
        {
            $items = $tag->items;
            foreach ($items as $item)
            {
                if(!$items_data->contains('id', $item->id))
                {
                    $items_data->push($item);
                }
            }
        }

        return $items_data;
    }


    public function search(Collection $input)
    {
        return parent::search($input);
    }


    public function searchItems(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $limit = $input->get('limit') ?: $this->repo->getModel()->getPerPage();
        $type = $input->get('type');
        $input->forget('type');

        $tags = $this->search($input);

        //$items = $this->getRelatedItems($tags);
        $data = $this->getRelatedData($tags, $type);

        $this->status = 'SearchItemsSuccess';
        $this->response = $paginate ? $this->repo->paginate($data, $limit, $input->get('page') ?: 1, []) : $data;

        return $data;
    }
}
