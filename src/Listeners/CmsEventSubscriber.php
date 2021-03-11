<?php

namespace DaydreamLab\Cms\Listeners;

use DaydreamLab\Cms\Events\Hit;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Observer\Services\Log\LogService;
use DaydreamLab\Observer\Services\Search\SearchService;
use Illuminate\Support\Facades\DB;

class CmsEventSubscriber
{
    protected $logService;

    public function __construct(
        LogService $logService,
        SearchService $searchService
    )
    {
        $this->logService    = $logService;
        $this->searchService = $searchService;
    }


    public function onAdd($event)
    {
        if ($event->user) {
            $input = Helper::collect([
                'created_by' => $event->user->id,
                'action'     => $event->action,
                'result'     => gettype($event->model) == 'object' ? 'success' : 'fail',
                'type'       => $event->type,
                'item_id'    => $event->model->id ?: null,
                'payload'    => json_encode($event->input)
            ]);

            $this->logService->store($input);
        }
    }


    public function onCheckout($event)
    {
        if ($event->user) {
            foreach ($event->item_ids as $item_id) {
                $input = Helper::collect([
                    'created_by' => $event->user->id,
                    'action'     => $event->action,
                    'result'     => $event->result,
                    'type'       => $event->type,
                    'item_id'    => $item_id,
                ]);

                $this->logService->store($input);
            }
        }
    }


    public function onModify($event)
    {
        if ($event->user) {
            $input = Helper::collect([
                'created_by' => $event->user->id,
                'action'     => $event->action,
                'result'     => $event->result ? 'success' : 'fail',
                'type'       => $event->type,
                'item_id'    => $event->model->id ?: null,
                'payload'    => json_encode($event->input)
            ]);

            $this->logService->store($input);
        }
    }


    public function onOrdering($event)
    {
        if ($event->user) {
            $input = Helper::collect([
                'created_by' => $event->user->id,
                'action'     => $event->action,
                'result'     => $event->result,
                'type'       => $event->type,
                'item_id'    => $event->item_id,
                'payload'    => $event->payload
            ]);

            $this->logService->store($input);
        }
    }


    public function onRemove($event)
    {
        if ($event->user) {
            foreach ($event->item_ids as $item_id) {
                $input = Helper::collect([
                    'created_by' => $event->user->id,
                    'action'     => $event->action,
                    'result'     => $event->result,
                    'type'       => $event->type,
                    'item_id'    => $item_id,
                ]);

                $this->logService->store($input);
            }
        }
    }


    public function onSearch($event)
    {
        if ($event->user) {
            foreach ($event->item_ids as $item_id) {
                $input = Helper::collect([
                    'created_by' => $event->user->id,
                    'action'     => $event->action,
                    'result'     => $event->result,
                    'type'       => $event->type,
                ]);

                $this->logService->store($input);
            }
        } elseif (isset($event->input->search)) {
            $this->searchService->add(collect([
                    'keyword'    => $event->input->search,
            ]));
        }
    }


    public function onState($event)
    {
        if ($event->user) {
            foreach ($event->item_ids as $item_id) {
                $input = Helper::collect([
                    'created_by' => $event->user->id,
                    'action'     => $event->action,
                    'result'     => $event->result,
                    'type'       => $event->type,
                    'item_id'    => $item_id,
                ]);

                $this->logService->store($input);
            }
        }
    }

    public function onHit(Hit $event)
    {
        $item = $event->item;
        if ($item->hasAttribute('hits')) {
            $item->hits++;
            $item->timestamps = false;
            $item->save();
        }
    }


    public function subscribe($events)
    {
        $events->listen(
            'DaydreamLab\Cms\Events\Add',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onAdd'
        );


        $events->listen(
            'DaydreamLab\Cms\Events\Checkout',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onCheckout'
        );


        $events->listen(
            'DaydreamLab\Cms\Events\Modify',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onModify'
        );


        $events->listen(
            'DaydreamLab\Cms\Events\Ordering',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onOrdering'
        );


        $events->listen(
            'DaydreamLab\Cms\Events\Remove',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onRemove'
        );


        $events->listen(
            'DaydreamLab\Cms\Events\State',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onState'
        );

        $events->listen(
            'DaydreamLab\Cms\Events\Search',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onSearch'
        );

        $events->listen(
            'DaydreamLab\Cms\Events\Hit',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onHit'
        );
    }
}
