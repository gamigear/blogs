<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MapsController extends AbstractController
{

    #[Route('/google-maps', name: 'app_google_maps')]
    public function googleMaps(): Response
    {
        return $this->render('maps/google-maps.html.twig', [
            'controller_name' => 'MapsController',
        ]);
    }

    #[Route('/leaflet-maps', name: 'app_leaflet_maps')]
    public function leafletMaps(): Response
    {
        return $this->render('maps/leaflet-maps.html.twig', [
            'controller_name' => 'MapsController',
        ]);
    }

    #[Route('/vector-maps', name: 'app_vector_maps')]
    public function vectorMaps(): Response
    {
        return $this->render('maps/vector-maps.html.twig', [
            'controller_name' => 'MapsController',
        ]);
    }
    
}
