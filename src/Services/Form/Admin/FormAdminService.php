<?php

namespace DaydreamLab\Cms\Services\Form\Admin;

use DaydreamLab\Cms\Repositories\Form\Admin\FormAdminRepository;
use DaydreamLab\Cms\Services\Form\FormService;
use DaydreamLab\JJAJ\Traits\LoggedIn;

class FormAdminService extends FormService
{
    use LoggedIn;

    protected $modelType = 'Admin';

    public function __construct(FormAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
