<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardsController extends AbstractController
{

   // Redirect '/' to '/index'
    #[Route('/', name: 'home_redirect')]
    public function redirectToIndex(): Response
    {
        return $this->redirectToRoute('app_index');
    }

    // Main dashboard page
    #[Route('/index', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('dashboards/index.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }

    // #[Route('/', name: '')]
    // public function index(): Response
    // {
    //     return $this->render('dashboards/index.html.twig', [
    //         'controller_name' => 'DashboardsController',
    //     ]);
    // }

    // #[Route('/index', name: 'app_index')]
    // public function indexact(): Response
    // {
    //     return $this->render('dashboards/index.html.twig', [
    //         'controller_name' => 'DashboardsController',
    //     ]);
    // }

}
