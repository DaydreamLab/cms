<?php

namespace DaydreamLab\Cms\Repositories\Language;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Language\Language;

class LanguageRepository extends BaseRepository
{
    public function __construct(Language $model)
    {
        parent::__construct($model);
    }
}