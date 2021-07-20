<?php

namespace DaydreamLab\Cms\Traits;

use DaydreamLab\Cms\Models\Item\Item;
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
        $json_data_field_type = ['multiSelect', 'repeater'];
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
                if ( in_array($extrafield['type'], $json_data_field_type) ) {
                    $e['value'] = ($extrafield['value']) ? json_decode($extrafield['value'], true) : [];
                } else {
                    $e['value'] = ($extrafield['value'] !== null) ? $extrafield['value'] : '';
                }
            } else {
                if ( in_array($extrafield['type'], $json_data_field_type) ) {
                    $e['value'] = json_decode($e_v->value, true);
                } else {
                    $e['value'] = $e_v->value;
                }
            }
            if ( isset($extrafield['params']['type']) ) {
                if ( $extrafield['params']['type'] == 'category' ) {
                    $items = Item::where('category_id', $extrafield['params']['category_id'])->where('state', 1)->get();
                    $options = $items->map(function ($i) {
                        return ['name' => $i->title, 'value' => $i->id];
                    })->toArray();
                } else {
                    $options = [];
                }
                $e['params'] = ['option' => $options];
            } else {
                $e['params'] = $extrafield['params'];
            }
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