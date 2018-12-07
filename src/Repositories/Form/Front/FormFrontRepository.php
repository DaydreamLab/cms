<?php

namespace DaydreamLab\Cms\Repositories\Form\Front;

use DaydreamLab\Cms\Repositories\Form\FormRepository;
use DaydreamLab\Cms\Models\Form\Front\FormFront;

class FormFrontRepository extends FormRepository
{
    public function __construct(FormFront $model)
    {
        parent::__construct($model);
    }
}