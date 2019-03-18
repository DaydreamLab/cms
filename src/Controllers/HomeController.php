<?php

namespace DaydreamLab\Cms\Controllers;

use Illuminate\Routing\Controller;

class HomeController extends Controller
{

    public function adminIndex()
    {
        return view('admin.index');
    }


    public function siteIndex()
    {
        return view('site.index');
    }

}