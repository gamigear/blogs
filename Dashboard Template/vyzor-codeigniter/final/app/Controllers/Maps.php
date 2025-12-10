<?php

namespace App\Controllers;

class Maps extends BaseController
{

    public function google_maps()
    {
        return view('pages/maps/google-maps');
    }
    
    public function leaflet_maps()
    {
        return view('pages/maps/leaflet-maps');
    }

    public function vector_maps()
    {
        return view('pages/maps/vector-maps');
    }
    
}