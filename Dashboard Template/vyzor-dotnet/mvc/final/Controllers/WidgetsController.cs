using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class WidgetsController : Controller
{
    private readonly ILogger<WidgetsController> _logger;

    public WidgetsController(ILogger<WidgetsController> logger)
    {
        _logger = logger;
    }

    [Route("/widgets")]
    public IActionResult widgets()
    {
        return View("widgets");
    }

}
