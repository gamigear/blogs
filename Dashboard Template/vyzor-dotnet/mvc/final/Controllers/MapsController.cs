using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class MapsController : Controller
{
    private readonly ILogger<MapsController> _logger;

    public MapsController(ILogger<MapsController> logger)
    {
        _logger = logger;
    }

    [Route("/google-maps")]
    public IActionResult google_maps()
    {
        return View("google_maps");
    }

    [Route("/leaflet-maps")]
    public IActionResult leaflet_maps()
    {
        return View("leaflet_maps");
    }

    [Route("/vector-maps")]
    public IActionResult vector_maps()
    {
        return View("vector_maps");
    }

}
