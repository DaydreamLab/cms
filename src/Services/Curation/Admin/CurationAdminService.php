<?php

namespace DaydreamLab\Cms\Services\Curation\Admin;

use DaydreamLab\Cms\Repositories\Curation\Admin\CurationAdminRepository;
use DaydreamLab\Cms\Services\Curation\CurationService;
use DaydreamLab\Dsth\Models\Event\Event;
use Illuminate\Support\Collection;

class CurationAdminService extends CurationService
{
    public function __construct(CurationAdminRepository $repo)
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


    public function beforeAdd(Collection &$input)
    {
        $this->cancelIsIndexCuration();
    }


    public function beforeModify(Collection &$input, &$item)
    {
        $this->cancelIsIndexCuration();
    }


    /**
     * 取消目前被設為首頁的策展
     */
    public function cancelIsIndexCuration()
    {
        $this->search(collect([
            'isIndex' => 1,
            'limit' => 0,
            'paginate' => 0
        ]))->each(function ($curation) {
            $curation->timestamps = false;
            $curation->isIndex = 0;
            $curation->save();
        });
    }


    public function handleItemsMap($item, $input, $action)
    {
        $itemTypes = ['video', 'promotion', 'solution'];
        foreach ($itemTypes as $itemType) {
            $inputData = $input->get($itemType . 'Ids') ?: [];
            $map = [];
            foreach ($inputData as $i) {
                $map[$i] = ['itemType' => $itemType];
            }
            $relation = $itemType . 's';
            if ($action == 'add') {
                $item->{$relation}()->attach($map);
            } else {
                $item->{$relation}()->sync($map);
            }
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
        $item->solutions()->detach();
        if (class_exists(Event::class)) {
            $item->events()->detach();
        }
    }
}
