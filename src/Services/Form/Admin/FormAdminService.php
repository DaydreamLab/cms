<?php

namespace DaydreamLab\Cms\Services\Form\Admin;

use DaydreamLab\Cms\Repositories\Form\Admin\FormAdminRepository;
use DaydreamLab\Cms\Services\Form\FormService;

class FormAdminService extends FormService
{
    protected $type = 'FormAdmin';

    public function __construct(FormAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
