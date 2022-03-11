<?php

namespace DaydreamLab\Cms\Services\IotNews\Front;

use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\Cms\Repositories\IotNews\Front\IotNewsFrontRepository;
use DaydreamLab\Cms\Services\IotEvent\Front\IotEventFrontService;
use DaydreamLab\Cms\Services\IotNews\IotNewsService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use Illuminate\Support\Collection;

class IotNewsFrontService extends IotNewsService
{
    public function __construct(IotNewsFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getItemByAlias(Collection $input)
    {
        $item = $this->repo->findBy('alias', '=', $input->get('alias'))->first();
        if (!$item) {
            throw new NotFoundException('ItemNotExist', [
                'alias' => $input->get('alias')
            ], null, $this->modelName);
        }

        $prevAndNext = $this->repo->getPreviousAndNext($item);
        $item->previous = $prevAndNext['previous'];
        $item->next     = $prevAndNext['next'];

        $this->status = 'GetItemSuccess';
        $this->response = $item;
        return $this->response;
    }


    public function search(Collection $input)
    {
        $tags = $input->get('tags') ? : [];
        if ( count($tags) ) {
            $tag_models = IotTag::whereIn('alias', $tags)->get();
            $q = $input->get('q');
            $q = $q->whereHas('tags', function ($query) use ($tag_models) {
                $query->whereIn('iot_news_tags_maps.tag_id', $tag_models->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('tags');

        if ( $order = $input->get('order') ) {
            $q = $input->get('q');
            $q->orderBy('publish_up', $order);
        }
        $input->forget('order');
        $input->put('state', 1);
        return parent::search($input);
    }


    public function searchAll(Collection $input)
    {
        $limit = $input->get('limit');
        $input->put('limit', 0);
        $page = $input->get('page');
        $input->forget('page');
        $input->put('paginate', false);
        $order = $input->get('order');
        $input->forget('order');

        $news = $this->search($input);
        $eventService = app(IotEventFrontService::class);
        $events = $eventService->search($input);

        $merged = $news->concat($events);
        $merged = ($order == 'desc') ? $merged->sortByDesc(function ($i) {
            return $i->publish_up;
        }) : $merged->sortBy(function ($i) {
            return $i->publish_up;
        });

        $this->response = $this->repo->paginate($merged->values(), $limit, $page ?: 1, []);
        return $this->response;
    }
}
