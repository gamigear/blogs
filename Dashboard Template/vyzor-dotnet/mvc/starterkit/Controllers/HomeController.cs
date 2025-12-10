using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using starterkit.Models;

namespace starterkit.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    // Redirect root URL "/" to "/index"
    [Route("/")]
    public IActionResult RootRedirect()
    {
        return RedirectToAction("Index");
    }

    // Serve /index
    [Route("/index")]
    public IActionResult Index()
    {
        return View();
    }


    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
