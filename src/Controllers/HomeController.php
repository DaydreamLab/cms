<?php

namespace DaydreamLab\Cms\Controllers;

use Illuminate\Routing\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return view('admin::index');
    }
}