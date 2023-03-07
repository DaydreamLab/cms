<?php

namespace DaydreamLab\Cms\Services\Topic\Admin;

use DaydreamLab\Cms\Repositories\Topic\Admin\TopicAdminRepository;
use DaydreamLab\Cms\Services\Topic\TopicService;
use DaydreamLab\Dsth\Models\Event\Event;
use Illuminate\Support\Collection;

class TopicAdminService extends TopicService
{
    public function __construct(TopicAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $this->handleItemsMap($item, $input, 'add');

        $eventIds = $input->get('eventIds') ?: [];
        if (class_exists(Event::class) && count($eventIds)) {
            $item->events()->attach($eventIds);
        }
    }


    public function handleItemsMap($item, $input, $action)
    {
        $itemTypes = ['video', 'promotion', 'article'];
        foreach ($itemTypes as $itemType) {
            $inputData = $input->get($itemType . 'Ids') ?: [];
            $map = [];
            foreach ($inputData as $i) {
                $map[$i] = ['itemType' => $itemType];
            }
            $relation = $itemType . 's';
            if ($action !== 'add') {
                $item->{$relation}()->detach();
            }
            $item->{$relation}()->attach($map);
        }
    }


    public function modifyMapping($item, $input)
    {
        $this->handleItemsMap($item, $input, 'modify');

        $eventIds = $input->get('eventIds') ?: [];
        if (class_exists(Event::class)) {
            $item->events()->sync($eventIds);
        }
    }


    public function removeMapping($item)
    {
        $item->videos()->detach();
        $item->promotions()->detach();
        $item->articles()->detach();
        if (class_exists(Event::class)) {
            $item->events()->detach();
        }
    }
}