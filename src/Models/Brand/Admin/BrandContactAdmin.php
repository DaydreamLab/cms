<?php
namespace DaydreamLab\Cms\Models\Brand\Admin;

use DaydreamLab\Cms\Models\Brand\BrandContact;

class BrandContactAdmin extends BrandContact
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $model_type = 'admin';
}