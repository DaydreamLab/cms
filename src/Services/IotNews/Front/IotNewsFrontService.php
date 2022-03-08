<?php

namespace DaydreamLab\Cms\Services\IotNews\Front;

use DaydreamLab\Cms\Repositories\IotNews\Front\IotNewsFrontRepository;
use DaydreamLab\Cms\Services\IotEvent\Front\IotEventFrontService;
use DaydreamLab\Cms\Services\IotNews\IotNewsService;
use Illuminate\Support\Collection;

class IotNewsFrontService extends IotNewsService
{
    public function __construct(IotNewsFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function search(Collection $input)
    {
        $input->put('state', 1);
        return parent::search($input);
    }


    public function searchAll(Collection $input)
    {
        $limit = $input->get('limit');
        $input->put('limit', 0);
        $page = $input->get('page');
        $input->forget('page');
        $input->forget('paginate');
        $order = $input->get('order');
        $input->forget('order');

        $news = $this->search($input);
        $eventService = app(IotEventFrontService::class);
        $events = $eventService->search($input);
        $merged = collect([]);

        $merged = $merged->merge($news);
        $merged = $merged->merge($events);
        $merged = ($order == 'desc') ? $merged->sortByDesc(function ($i) {
            return $i->publish_up;
        }) : $merged->sortBy(function ($i) {
            return $i->publish_up;
        });

        $this->response = $this->repo->paginate($merged, $limit, $page ?: 1, []);
        return $this->response;
    }
}
