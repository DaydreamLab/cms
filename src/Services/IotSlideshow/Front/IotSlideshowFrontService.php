<?php

namespace DaydreamLab\Cms\Services\IotSlideshow\Front;

use DaydreamLab\Cms\Repositories\IotSlideshow\Front\IotSlideshowFrontRepository;
use DaydreamLab\Cms\Resources\IotEvent\Front\Collections\IotEventFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotNews\Front\Collections\IotNewsFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotResource\Front\Collections\IotResourceFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotSlideshow\Front\Collections\IotSlideshowFrontResourceCollection;
use DaydreamLab\Cms\Services\IotCategory\Front\IotCategoryFrontService;
use DaydreamLab\Cms\Services\IotEvent\Front\IotEventFrontService;
use DaydreamLab\Cms\Services\IotNews\Front\IotNewsFrontService;
use DaydreamLab\Cms\Services\IotSlideshow\IotSlideshowService;

class IotSlideshowFrontService extends IotSlideshowService
{
    public function __construct(IotSlideshowFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function homepage()
    {
        # slideshows
        $response['slideshows'] = new IotSlideshowFrontResourceCollection($this->repo->all(), false);
        # resources
        $category_service = app(IotCategoryFrontService::class);
        $category_tree = $category_service->treeList();
        $resources = $category_tree->keyBy('title')->map(function ($cat) {
            $cat_resources = collect([]);
            foreach ($cat->children as $child) {
                $cat_resources = $cat_resources->merge($child->resources);
            }
            return new IotResourceFrontSearchResourceCollection($cat_resources->unique('id')->values(), false);
        });
        $response['resource'] = $resources;
        # news
        $search_params = [ 'limit' => 0, 'paginate' => false ];
        $news_service = app(IotNewsFrontService::class);
        $all_news = $news_service->search(collect($search_params));
        # events
        $event_service = app(IotEventFrontService::class);
        $all_event = $event_service->search(collect($search_params));
        # all
        $merged = $all_news->concat($all_event);
        $merged = $merged->sortByDesc(function ($i) {
            return $i->publish_up;
        })->values();

        $response['news']['news'] = new IotNewsFrontSearchResourceCollection($merged->take(3), false);
        $response['news']['bulletin'] = new IotNewsFrontSearchResourceCollection($all_news->take(3), false);;
        $response['news']['event'] = new IotEventFrontSearchResourceCollection($all_event->take(3), false);
        $this->status = 'getItemSuccess';
        $this->response = $response;
        return $this->response;
    }
}
