using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class IconsController : Controller
{
    private readonly ILogger<IconsController> _logger;

    public IconsController(ILogger<IconsController> logger)
    {
        _logger = logger;
    }

    [Route("/icons")]
    public IActionResult icons()
    {
        return View("icons");
    }

}
