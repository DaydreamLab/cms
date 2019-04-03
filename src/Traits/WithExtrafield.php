<?php

namespace DaydreamLab\Cms\Traits;

use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldGroupAdmin;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldGroupFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;

trait WithExtrafield
{
    protected $class_extrafield_group = null;

    public function extrafieldGroup()
    {
        return $this->hasOne($this->class_extrafield_group, 'id', 'extrafield_group_id');
    }


    public function getExtrafieldsAttribute($value)
    {
        $value = $value ? $value : json_encode([]);
        $extrafield_ids = [];
        foreach (json_decode($value) as $extrafield)
        {
            $extrafield_ids[] = $extrafield->id;
        }

        if($this->model_type == 'parent')
        {
            $extrafields_data = Extrafield::whereIn('id', $extrafield_ids)->get();
        }
        elseif($this->model_type = 'front')
        {
            $extrafields_data = ExtrafieldFront::whereIn('id', $extrafield_ids)->get();
        }
        else
        {
            $extrafields_data = ExtrafieldAdmin::whereIn('id', $extrafield_ids)->get();
        }

        foreach ($extrafields_data as $extrafield_data)
        {
            foreach (json_decode($value) as $extrafield)
            {
                if($extrafield->id == $extrafield_data->id) {
                    $extrafield_data->value = $extrafield->value;
//                    if (property_exists($extrafield, 'params')){
//                        foreach ($extrafield->params as $key => $param)
//                        {
//                            $extrafield_data->{$key} = $param->value;
//                            $this->{$extrafield_data->alias . '_' . $key} = $param->value;
//                        }
//                    }
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


    public function getExtrafieldGroupClass()
    {
        if($this->class_extrafield_group == null)
        {
            if($this->model_type == 'parent')
            {
                $this->class_extrafield_group = ExtrafieldGroup::class;
            }
            elseif ($this->model_type == 'front')
            {
                $this->class_extrafield_group = ExtrafieldGroupFront::class;
            }
            else
            {
                $this->class_extrafield_group = ExtrafieldGroupAdmin::class;
            }
        }

        return $this->class_extrafield_group;
    }

}