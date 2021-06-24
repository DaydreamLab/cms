<?php
namespace DaydreamLab\Cms\Models\Brand\Front;

use DaydreamLab\Cms\Models\Brand\Brand;

class BrandFront extends Brand
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $model_type = 'front';
}