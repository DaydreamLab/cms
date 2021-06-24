<?php
namespace DaydreamLab\Cms\Models\Brand\Admin;

use DaydreamLab\Cms\Models\Brand\Brand;

class BrandAdmin extends Brand
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $model_type = 'admin';
}