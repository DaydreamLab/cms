<?php
namespace DaydreamLab\Cms\Models\Newsletter\Front;

use DaydreamLab\Cms\Models\Newsletter\Newsletter;

class NewsletterFront extends Newsletter
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'newsletters';

    protected $model_type = 'front';
}