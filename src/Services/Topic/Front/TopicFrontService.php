<?php

namespace DaydreamLab\Cms\Services\Topic\Front;

use DaydreamLab\Cms\Repositories\Topic\Front\TopicFrontRepository;
use DaydreamLab\Cms\Services\Topic\TopicService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use Illuminate\Support\Collection;

class TopicFrontService extends TopicService
{
    public function __construct(TopicFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getItemByAlias(Collection $input)
    {
        $item = $this->search(collect([
            'alias' => $input->get('alias'),
            'state' => 1,
            'limit' => 1,
            'q' => (new QueryCapsule())->whereHas('curation', function ($q) use ($input) {
                $q->where('curations.alias', $input->get('curationAlias'));
            })->where(function ($q) {
                $q->where(function ($q) {
                    $q->whereNotNull('topics.publish_up')
                        ->where('topics.publish_up', '<', now()->toDateTimeString())
                        ->where(function ($q) {
                            $q->whereNull('topics.publish_down')
                                ->orWhere('topics.publish_down', '>', now()->toDateTimeString());
                        });
                });
            })->with([
                'events',
                'events.dates',
                'events.brands',
                'events.sessions',
                'events.sessions.event',
                'promotions',
                'articles',
                'articles.category',
                'articles.brands',
                'articles',
            ])
        ]))->first();
        if (!$item) {
            throw new NotFoundException('ItemNotExist', null, null, $this->modelName);
        }

        if ($item->hasAttribute('hits')) {
            $this->update($item, collect(['hits' => $item->hits + 1]));
        }

        $this->status = 'GetItemSuccess';
        $this->response = $item;

        return $item;
    }
}
