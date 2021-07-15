<?php
namespace DaydreamLab\Cms\Models\Newsletter\Admin;

use DaydreamLab\Cms\Models\Newsletter\Newsletter;

class NewsletterAdmin extends Newsletter
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'newsletters';

    protected $model_type = 'admin';
}