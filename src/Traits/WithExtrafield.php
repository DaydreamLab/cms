<?php

namespace DaydreamLab\Cms\Traits;

use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldGroupAdmin;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldGroupFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;

trait WithExtrafield
{
    protected $class_extrafield_group = null;

    public function extrafieldGroup()
    {
        return $this->hasOne($this->getExtrafieldGroupClass(), 'id', 'extrafield_group_id');
    }


    public function getExtrafieldsAttribute($value)
    {
        $data = [];
        $extrafields = Extrafield::where('content_type', $this->category->content_type)->get()->toArray();
        $extrafields = array_merge($extrafields, Extrafield::where('category_id', $this->category->id)->get()->toArray());
        foreach ($extrafields as $extrafield) {
            $e['id'] = $extrafield['id'];
            $e['type'] = $extrafield['type'];
            $e['alias'] = $extrafield['alias'];
            $e['title'] = $extrafield['title'];
            $e_v = ExtrafieldValue::where('item_id', $this->id)->where('extrafield_id', $extrafield['id'])->first();
            if (!$e_v) {
                if ($extrafield['type'] == 'repeater') {
                    $e['value'] = [];
                } else {
                    $e['value'] = '';
                }
            } else {
                if ($extrafield['type'] == 'repeater') {
                    $e['value'] = json_decode($e_v->value, true);
                } else {
                    $e['value'] = $e_v->value;
                }
            }
            $e['params'] = $extrafield['params'];
            $data[$e['alias']] = $e;
        }

        return $data;
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