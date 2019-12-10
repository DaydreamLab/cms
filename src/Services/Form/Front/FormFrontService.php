<?php

namespace DaydreamLab\Cms\Services\Form\Front;

use DaydreamLab\Cms\Notifications\FormAdminNotification;
use DaydreamLab\Cms\Notifications\FormUserNotification;
use DaydreamLab\Cms\Repositories\Form\Front\FormFrontRepository;
use DaydreamLab\Cms\Services\Form\FormService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Notification;

class FormFrontService extends FormService
{
    protected $type = 'FormFront';

    public function __construct(FormFrontRepository $repo)
    {
        parent::__construct($repo);
    }

    public function store(Collection $input)
    {
        $result = parent::store($input);
        if ($result)
        {
            $admins = config('daydreamlab.cms.form.email.admins');
            foreach ($admins as $admin)
            {
                Notification::route('mail', $admin)->notify(new FormAdminNotification($input->toArray()));
            }

            Notification::route('mail', $input->email)->notify(new FormUserNotification($input->toArray()));
        }
        else
        {
            $this->status = 'FORM_ADMIN_CREATE_FAIL';
            $this->response = null;
        }

        return $result;
    }
}
