<?php

namespace App\Controllers;

class Dashboards extends BaseController
{

    // Method to redirect root to /index
    public function redirectToIndex()
    {
        return redirect()->to(base_url('index'));
    }
    
    public function index()
    {
        return view('pages/dashboards/index');
    }

}