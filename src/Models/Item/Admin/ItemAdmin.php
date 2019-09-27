<?php
namespace DaydreamLab\Cms\Models\Item\Admin;

use DaydreamLab\Cms\Models\Item\Item;

class ItemAdmin extends Item
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';


    protected $model_type = 'admin';

}