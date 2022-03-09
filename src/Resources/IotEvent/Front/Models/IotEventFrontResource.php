<?php

namespace DaydreamLab\Cms\Resources\IotEvent\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use Illuminate\Support\Carbon;

class IotEventFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'category'      => '活動',
            'alias'         => $this->alias,
            'title'         => $this->title,
            'description'   => $this->description,
            'introimage'    => $this->introimage,
            'introtext'     => $this->introtext,
            'start_date'    => $this->weekDayFormat($this->start_date),
            'end_date'      => $this->weekDayFormat($this->end_date),
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }


    protected function weekDayFormat($dateTime)
    {
        $parsed = Carbon::parse($dateTime, config('app.timezone'))->tz('Asia/Taipei');
        $week_day = [ 0 => '日', 1 => '一', 2 => '二', 3 => '三', 4 => '四', 5 => '五', 6 => '六' ];
        return $parsed->format('Y/m/d').'('.$week_day[$parsed->dayOfWeek].')';
    }
}
