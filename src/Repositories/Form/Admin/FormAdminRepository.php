<?php

namespace DaydreamLab\Cms\Repositories\Form\Admin;

use DaydreamLab\Cms\Repositories\Form\FormRepository;
use DaydreamLab\Cms\Models\Form\Admin\FormAdmin;

class FormAdminRepository extends FormRepository
{
    public function __construct(FormAdmin $model)
    {
        parent::__construct($model);
    }
}