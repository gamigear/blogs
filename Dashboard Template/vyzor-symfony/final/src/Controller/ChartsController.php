<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChartsController extends AbstractController
{

    #[Route('/apex-area-charts', name: 'app_apex_area_charts')]
    public function apexAreaCharts(): Response
    {
        return $this->render('charts/apex-area-charts.html.twig');
    }
    
    #[Route('/apex-bar-charts', name: 'app_apex_bar_charts')]
    public function apexBarCharts(): Response
    {
        return $this->render('charts/apex-bar-charts.html.twig');
    }

    #[Route('/apex-boxplot-charts', name: 'app_apex_boxplot_charts')]
    public function apexBoxplotCharts(): Response
    {
        return $this->render('charts/apex-boxplot-charts.html.twig');
    }
    
    #[Route('/apex-bubble-charts', name: 'app_apex_bubble_charts')]
    public function apexBubbleCharts(): Response
    {
        return $this->render('charts/apex-bubble-charts.html.twig');
    }

    #[Route('/apex-candlestick-charts', name: 'app_apex_candlestick_charts')]
    public function apexCandlestickCharts(): Response
    {
        return $this->render('charts/apex-candlestick-charts.html.twig');
    }

    #[Route('/apex-column-charts', name: 'app_apex_column_charts')]
    public function apexColumnCharts(): Response
    {
        return $this->render('charts/apex-column-charts.html.twig');
    }

    #[Route('/apex-funnel-charts', name: 'app_apex_funnel_charts')]
    public function apexFunnelCharts(): Response
    {
        return $this->render('charts/apex-funnel-charts.html.twig');
    }

    #[Route('/apex-heatmap-charts', name: 'app_apex_heatmap_charts')]
    public function apexHeatmapCharts(): Response
    {
        return $this->render('charts/apex-heatmap-charts.html.twig');
    }

    #[Route('/apex-line-charts', name: 'app_apex_line_charts')]
    public function apexLineCharts(): Response
    {
        return $this->render('charts/apex-line-charts.html.twig');
    }

    #[Route('/apex-mixed-charts', name: 'app_apex_mixed_charts')]
    public function apexMixedCharts(): Response
    {
        return $this->render('charts/apex-mixed-charts.html.twig');
    }

    #[Route('/apex-pie-charts', name: 'app_apex_pie_charts')]
    public function apexPieCharts(): Response
    {
        return $this->render('charts/apex-pie-charts.html.twig');
    }

    #[Route('/apex-polararea-charts', name: 'app_apex_polararea_charts')]
    public function apexPolarareaCharts(): Response
    {
        return $this->render('charts/apex-polararea-charts.html.twig');
    }

    #[Route('/apex-radar-charts', name: 'app_apex_radar_charts')]
    public function apexRadarCharts(): Response
    {
        return $this->render('charts/apex-radar-charts.html.twig');
    }

    #[Route('/apex-radialbar-charts', name: 'app_apex_radialbar_charts')]
    public function apexRadialbarCharts(): Response
    {
        return $this->render('charts/apex-radialbar-charts.html.twig');
    }

    #[Route('/apex-rangearea-charts', name: 'app_apex_rangearea_charts')]
    public function apexRangeareaCharts(): Response
    {
        return $this->render('charts/apex-rangearea-charts.html.twig');
    }

    #[Route('/apex-scatter-charts', name: 'app_apex_scatter_charts')]
    public function apexScatterCharts(): Response
    {
        return $this->render('charts/apex-scatter-charts.html.twig');
    }

    #[Route('/apex-timeline-charts', name: 'app_apex_timeline_charts')]
    public function apexTimelineCharts(): Response
    {
        return $this->render('charts/apex-timeline-charts.html.twig');
    }

    #[Route('/apex-treemap-charts', name: 'app_apex_treemap_charts')]
    public function apexTreemapCharts(): Response
    {
        return $this->render('charts/apex-treemap-charts.html.twig');
    }

    #[Route('/chartjs-charts', name: 'app_chartjs_charts')]
    public function chartjsCharts(): Response
    {
        return $this->render('charts/chartjs-charts.html.twig');
    }

    #[Route('/echarts', name: 'app_echarts')]
    public function echarts(): Response
    {
        return $this->render('charts/echarts.html.twig');
    }

}
