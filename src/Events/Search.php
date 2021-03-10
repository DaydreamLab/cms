<?php

namespace DaydreamLab\Cms\Events;


class Search extends \DaydreamLab\JJAJ\Events\Search
{
    public function __construct($input, $user)
    {
        parent::__construct($input, $user);
    }
}
