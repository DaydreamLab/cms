<?php

namespace DaydreamLab\Cms\Traits\Service;

use DaydreamLab\Cms\Models\Cms\CmsCronJob as cmsModel;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

trait CmsCronJob
{
    public function setCronJob(Collection $input, $item)
    {
        cmsModel::where('table', $this->repo->getModel()->getTable())->where('item_id', $item->id)->delete();
        if (!InputHelper::null($input, 'publish_up') && $input->get('publish_up') > now())
        {
            $this->cmsCronJobService->create([
                'table'     => $this->repo->getModel()->getTable(),
                'item_id'   => $item->id,
                'type'      => 'up',
                'time'      => $item->publish_up
            ]);
        }

        if (!InputHelper::null($input, 'publish_down') && $input->get('publish_down') > now())
        {
            $this->cmsCronJobService->create([
                'table'     => $this->repo->getModel()->getTable(),
                'item_id'   => $item->id,
                'type'      => 'down',
                'time'      => $item->publish_down
            ]);
        }
    }
}