<?php

namespace DaydreamLab\Cms\Traits;

use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldGroupAdmin;

trait WithExtrafield
{
    public function extrafieldGroup()
    {
        return $this->hasOne(ExtrafieldGroupAdmin::class, 'id', 'extrafield_group_id');
    }

    public function getExtrafieldsAttribute($value)
    {
        $value = $value ? $value : json_encode([]);
        $extrafield_ids = [];
        foreach (json_decode($value) as $extrafield)
        {
            $extrafield_ids[] = $extrafield->id;
        }

        $extrafields_data = ExtrafieldAdmin::whereIn('id', $extrafield_ids)->get();
        foreach ($extrafields_data as $extrafield_data)
        {
            foreach (json_decode($value) as $extrafield)
            {
                if($extrafield->id == $extrafield_data->id) {
                    $extrafield_data->value = $extrafield->value;
                    if (property_exists($extrafield, 'params')){
                        foreach ($extrafield->params as $key => $param)
                        {
                            $extrafield_data->{$key} = $param->value;
                            $this->{$extrafield_data->alias . '_' . $key} = $param->value;
                        }
                    }
                }
            }
        }

        return $extrafields_data;
    }

    public function getExtrafieldGroupTitleAttribute()
    {
        $group = $this->extrafieldGroup()->first();

        return $group ? $group->title : null;
    }
}