<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TablesController extends AbstractController
{
    
    #[Route('/data-tables', name: 'app_data_tables')]
    public function dataTables(): Response
    {
        return $this->render('tables/data-tables.html.twig', [
            'controller_name' => 'TablesController',
        ]);
    }
    
    #[Route('/grid-tables', name: 'app_grid_tables')]
    public function gridTables(): Response
    {
        return $this->render('tables/grid-tables.html.twig', [
            'controller_name' => 'TablesController',
        ]);
    }

    #[Route('/tables', name: 'app_tables')]
    public function tables(): Response
    {
        return $this->render('tables/tables.html.twig', [
            'controller_name' => 'TablesController',
        ]);
    }

}
