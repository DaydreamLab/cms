<?php

namespace DaydreamLab\Cms\Services\IotEvent\Front;

use DaydreamLab\Cms\Repositories\IotEvent\Front\IotEventFrontRepository;
use DaydreamLab\Cms\Services\IotEvent\IotEventService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use Illuminate\Support\Collection;

class IotEventFrontService extends IotEventService
{
    public function __construct(IotEventFrontRepository $repo)
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
        if ( $order = $input->get('order') ) {
            $q = $input->get('q');
            $q->orderBy('publish_up', $order);
        }
        $input->forget('order');
        $input->put('state', 1);
        return parent::search($input);
    }
}
