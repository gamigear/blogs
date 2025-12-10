using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class ChartsController : Controller
{
    private readonly ILogger<ChartsController> _logger;

    public ChartsController(ILogger<ChartsController> logger)
    {
        _logger = logger;
    }

    [Route("/apex-area-charts")]
    public IActionResult apex_area_charts()
    {
        return View("apex_area_charts");
    }

    [Route("/apex-bar-charts")]
    public IActionResult apex_bar_charts()
    {
        return View("apex_bar_charts");
    }

    [Route("/apex-boxplot-charts")]
    public IActionResult apex_boxplot_charts()
    {
        return View("apex_boxplot_charts");
    }

    [Route("/apex-bubble-charts")]
    public IActionResult apex_bubble_charts()
    {
        return View("apex_bubble_charts");
    }

    [Route("/apex-candlestick-charts")]
    public IActionResult apex_candlestick_charts()
    {
        return View("apex_candlestick_charts");
    }

    [Route("/apex-column-charts")]
    public IActionResult apex_column_charts()
    {
        return View("apex_column_charts");
    }

    [Route("/apex-funnel-charts")]
    public IActionResult apex_funnel_charts()
    {
        return View("apex_funnel_charts");
    }

    [Route("/apex-heatmap-charts")]
    public IActionResult apex_heatmap_charts()
    {
        return View("apex_heatmap_charts");
    }

    [Route("/apex-line-charts")]
    public IActionResult apex_line_charts()
    {
        return View("apex_line_charts");
    }

    [Route("/apex-mixed-charts")]
    public IActionResult apex_mixed_charts()
    {
        return View("apex_mixed_charts");
    }

    [Route("/apex-pie-charts")]
    public IActionResult apex_pie_charts()
    {
        return View("apex_pie_charts");
    }

    [Route("/apex-polararea-charts")]
    public IActionResult apex_polararea_charts()
    {
        return View("apex_polararea_charts");
    }

    [Route("/apex-radar-charts")]
    public IActionResult apex_radar_charts()
    {
        return View("apex_radar_charts");
    }

    [Route("/apex-radialbar-charts")]
    public IActionResult apex_radialbar_charts()
    {
        return View("apex_radialbar_charts");
    }

    [Route("/apex-rangearea-charts")]
    public IActionResult apex_rangearea_charts()
    {
        return View("apex_rangearea_charts");
    }

    [Route("/apex-scatter-charts")]
    public IActionResult apex_scatter_charts()
    {
        return View("apex_scatter_charts");
    }

    [Route("/apex-timeline-charts")]
    public IActionResult apex_timeline_charts()
    {
        return View("apex_timeline_charts");
    }

    [Route("/apex-treemap-charts")]
    public IActionResult apex_treemap_charts()
    {
        return View("apex_treemap_charts");
    }

    [Route("/chartjs-charts")]
    public IActionResult chartjs_charts()
    {
        return View("chartjs_charts");
    }

    [Route("/echarts")]
    public IActionResult echarts()
    {
        return View("echarts");
    }

}
