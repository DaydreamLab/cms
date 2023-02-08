<?php

namespace DaydreamLab\Cms\Traits\Resource;

use Carbon\Carbon;

trait CmsResource
{
    public static function getDateTimeString($dateTime, $tz, $format = null)
    {
        return  $dateTime
            ? ($format
                ? self::parse($dateTime, $tz)->format($format)
                : self::parse($dateTime, $tz)->toDateTimeString()
            )
            : null;
    }


    public static function parse($dateTime, $tz)
    {
        return Carbon::parse($dateTime, config('app.timezone'))->tz($tz);
    }
}