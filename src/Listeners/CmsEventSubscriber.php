<?php

namespace DaydreamLab\Cms\Listeners;


use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Observer\Services\Log\LogService;

class CmsEventSubscriber
{

    protected $logService;


    public function __construct(LogService $logService)
    {
        $this->logService = $logService;
    }


    public function onAdd($event)
    {
        if ($event->user)
        {
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
        if ($event->user)
        {
            foreach ($event->item_ids as $item_id)
            {
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
        if ($event->user)
        {
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
        if ($event->user)
        {
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
        if ($event->user)
        {
            foreach ($event->item_ids as $item_id)
            {
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


    public function onState($event)
    {
        if ($event->user)
        {
            foreach ($event->item_ids as $item_id)
            {
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


    public function subscribe($events)
    {
        $events->listen(
            'DaydreamLab\JJAJ\Events\Add',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onAdd'
        );


        $events->listen(
            'DaydreamLab\JJAJ\Events\Checkout',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onCheckout'
        );


        $events->listen(
            'DaydreamLab\JJAJ\Events\Modify',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onModify'
        );


        $events->listen(
            'DaydreamLab\JJAJ\Events\Ordering',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onOrdering'
        );


        $events->listen(
            'DaydreamLab\JJAJ\Events\Remove',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onRemove'
        );


        $events->listen(
            'DaydreamLab\JJAJ\Events\State',
            'DaydreamLab\Cms\Listeners\CmsEventSubscriber@onState'
        );
    }
}