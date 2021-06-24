<?php
namespace DaydreamLab\Cms\Models\Brand\Front;

use DaydreamLab\Cms\Models\Brand\BrandContact;

class BrandContactFront extends BrandContact
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $model_type = 'front';
}