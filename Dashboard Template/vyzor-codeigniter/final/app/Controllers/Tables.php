<?php

namespace App\Controllers;

class Tables extends BaseController
{

    public function data_tables()
    {
        return view('pages/tables/data-tables');
    }
    
    public function grid_tables()
    {
        return view('pages/tables/grid-tables');
    }

    public function tables()
    {
        return view('pages/tables/tables');
    }
    
}