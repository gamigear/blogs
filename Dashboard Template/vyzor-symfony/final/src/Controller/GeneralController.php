<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GeneralController extends AbstractController
{

    #[Route('/accordions-collpase', name: 'app_accordions_collpase')]
    public function accordionsCollpase(): Response
    {
        return $this->render('general/accordions-collpase.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/alerts', name: 'app_alerts')]
    public function alerts(): Response
    {
        return $this->render('general/alerts.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/avatars', name: 'app_avatars')]
    public function avatars(): Response
    {
        return $this->render('general/avatars.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/badge', name: 'app_badge')]
    public function badge(): Response
    {
        return $this->render('general/badge.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/borders', name: 'app_borders')]
    public function borders(): Response
    {
        return $this->render('general/borders.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/breadcrumb', name: 'app_breadcrumb')]
    public function breadcrumb(): Response
    {
        return $this->render('general/breadcrumb.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/breakpoints', name: 'app_breakpoints')]
    public function breakpoints(): Response
    {
        return $this->render('general/breakpoints.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/buttongroup', name: 'app_buttongroup')]
    public function buttongroup(): Response
    {
        return $this->render('general/buttongroup.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/buttons', name: 'app_buttons')]
    public function buttons(): Response
    {
        return $this->render('general/buttons.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/cards', name: 'app_cards')]
    public function cards(): Response
    {
        return $this->render('general/cards.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/carousel', name: 'app_carousel')]
    public function carousel(): Response
    {
        return $this->render('general/carousel.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/colors', name: 'app_colors')]
    public function colors(): Response
    {
        return $this->render('general/colors.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/columns', name: 'app_columns')]
    public function columns(): Response
    {
        return $this->render('general/columns.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/css-grid', name: 'app_css_grid')]
    public function cssGrid(): Response
    {
        return $this->render('general/css-grid.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/draggable-cards', name: 'app_draggable_cards')]
    public function draggableCards(): Response
    {
        return $this->render('general/draggable-cards.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/dropdowns', name: 'app_dropdowns')]
    public function dropdowns(): Response
    {
        return $this->render('general/dropdowns.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/flex', name: 'app_flex')]
    public function flex(): Response
    {
        return $this->render('general/flex.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/gutters', name: 'app_gutters')]
    public function gutters(): Response
    {
        return $this->render('general/gutters.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/helpers', name: 'app_helpers')]
    public function helpers(): Response
    {
        return $this->render('general/helpers.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/images-figures', name: 'app_images_figures')]
    public function imagesFigures(): Response
    {
        return $this->render('general/images-figures.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/links-interactions', name: 'app_links_interactions')]
    public function linksInteractions(): Response
    {
        return $this->render('general/links-interactions.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/listgroup', name: 'app_listgroup')]
    public function listgroup(): Response
    {
        return $this->render('general/listgroup.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/media-player', name: 'app_media_player')]
    public function mediaPlayer(): Response
    {
        return $this->render('general/media-player.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/modals-closes', name: 'app_modals_closes')]
    public function modalsCloses(): Response
    {
        return $this->render('general/modals-closes.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/more', name: 'app_more')]
    public function more(): Response
    {
        return $this->render('general/more.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/navbar', name: 'app_navbar')]
    public function navbar(): Response
    {
        return $this->render('general/navbar.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/navs-tabs', name: 'app_navs_tabs')]
    public function navsTabs(): Response
    {
        return $this->render('general/navs-tabs.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/object-fit', name: 'app_object_fit')]
    public function objectFit(): Response
    {
        return $this->render('general/object-fit.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/offcanvas', name: 'app_offcanvas')]
    public function offcanvas(): Response
    {
        return $this->render('general/offcanvas.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/pagination', name: 'app_pagination')]
    public function pagination(): Response
    {
        return $this->render('general/pagination.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/placeholders', name: 'app_placeholders')]
    public function placeholders(): Response
    {
        return $this->render('general/placeholders.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/popovers', name: 'app_popovers')]
    public function popovers(): Response
    {
        return $this->render('general/popovers.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/position', name: 'app_position')]
    public function position(): Response
    {
        return $this->render('general/position.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/progress', name: 'app_progress')]
    public function progress(): Response
    {
        return $this->render('general/progress.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/ratings', name: 'app_ratings')]
    public function ratings(): Response
    {
        return $this->render('general/ratings.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/ribbons', name: 'app_ribbons')]
    public function ribbons(): Response
    {
        return $this->render('general/ribbons.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/scrollspy', name: 'app_scrollspy')]
    public function scrollspy(): Response
    {
        return $this->render('general/scrollspy.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/sortable-list', name: 'app_sortable_list')]
    public function sortableList(): Response
    {
        return $this->render('general/sortable-list.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/spinners', name: 'app_spinners')]
    public function spinners(): Response
    {
        return $this->render('general/spinners.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/swiperjs', name: 'app_swiperjs')]
    public function swiperjs(): Response
    {
        return $this->render('general/swiperjs.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/toasts', name: 'app_toasts')]
    public function toasts(): Response
    {
        return $this->render('general/toasts.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/tooltips', name: 'app_tooltips')]
    public function tooltips(): Response
    {
        return $this->render('general/tooltips.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/tour', name: 'app_tour')]
    public function tour(): Response
    {
        return $this->render('general/tour.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
    
    #[Route('/typography', name: 'app_typography')]
    public function typography(): Response
    {
        return $this->render('general/typography.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }

}
