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
            'start_date'    => $this->dateWeekDayFormat($this->start_date),
            'end_date'      => $this->dateWeekDayFormat($this->end_date),
            'status'        => $this->status,
            'contacts'      => $this->contacts,
            'city'          => $this->city,
            'district'      => $this->district,
            'address'       => $this->address,
            'locationName'  => $this->locationName,
            'permission'    => $this->permission,
            'sponsors'      => $this->sponsors,
            'url'           => $this->url,
            'featured'      => $this->featured,
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }


    protected function dateWeekDayFormat($dateTime)
    {
        $parsed = Carbon::parse($dateTime, config('app.timezone'))->tz('Asia/Taipei');
        $week_day = [ 0 => '日', 1 => '一', 2 => '二', 3 => '三', 4 => '四', 5 => '五', 6 => '六' ];
        return $parsed->format('Y/m/d').'('.$week_day[$parsed->dayOfWeek].')';
    }


    protected function statusFormat($status)
    {
        $map = [
            'UNOPEN'    => '未開放報名',
            'OPEN'      => '開放報名',
            'CLOSED'    => '報名截止',
            'INPROGRESS' => '進行中',
            'FINISHED'  => '已結束',
            'EVENTCANCEL' => '已取消'
        ];
        return $map[$status];
    }


    protected function permissionFormat($permission)
    {
        $map = [
            'FREE'  => '不限制',
            'LIMIT' => '僅限指定廠商'
        ];
        return $map[$permission];
    }
}
