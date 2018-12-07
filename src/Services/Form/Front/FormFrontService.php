<?php

namespace DaydreamLab\Cms\Services\Form\Front;

use DaydreamLab\Cms\Repositories\Form\Front\FormFrontRepository;
use DaydreamLab\Cms\Services\Form\FormService;

class FormFrontService extends FormService
{
    protected $type = 'FormFront';

    public function __construct(FormFrontRepository $repo)
    {
        parent::__construct($repo);
    }

}
