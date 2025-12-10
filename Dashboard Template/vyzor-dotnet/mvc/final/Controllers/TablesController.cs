using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class TablesController : Controller
{
    private readonly ILogger<TablesController> _logger;

    public TablesController(ILogger<TablesController> logger)
    {
        _logger = logger;
    }

    [Route("/data-tables")]
    public IActionResult data_tables()
    {
        return View("data_tables");
    }

    [Route("/grid-tables")]
    public IActionResult grid_tables()
    {
        return View("grid_tables");
    }

    [Route("/tables")]
    public IActionResult tables()
    {
        return View("tables");
    }

}
