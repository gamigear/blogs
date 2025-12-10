<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IconsController extends AbstractController
{

    #[Route('/icons', name: 'app_icons')]
    public function icons(): Response
    {
        return $this->render('icons/icons.html.twig', [
            'controller_name' => 'IconsController',
        ]);
    }

}
