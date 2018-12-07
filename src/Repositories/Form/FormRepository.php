<?php

namespace DaydreamLab\Cms\Repositories\Form;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Form\Form;

class FormRepository extends BaseRepository
{
    public function __construct(Form $model)
    {
        parent::__construct($model);
    }
}