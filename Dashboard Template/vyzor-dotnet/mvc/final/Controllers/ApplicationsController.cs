using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class ApplicationsController : Controller
{
    private readonly ILogger<ApplicationsController> _logger;

    public ApplicationsController(ILogger<ApplicationsController> logger)
    {
        _logger = logger;
    }

    [Route("/chat")]
    public IActionResult chat()
    {
        return View("chat");
    }

    [Route("/file-manager")]
    public IActionResult file_manager()
    {
        return View("file_manager");
    }

    [Route("/full-calendar")]
    public IActionResult full_calendar()
    {
        return View("full_calendar");
    }

    [Route("/gallery")]
    public IActionResult gallery()
    {
        return View("gallery");
    }

    [Route("/mail-settings")]
    public IActionResult mail_settings()
    {
        return View("mail_settings");
    }

    [Route("/mail")]
    public IActionResult mail()
    {
        return View("mail");
    }

    [Route("/sweet-alerts")]
    public IActionResult sweet_alerts()
    {
        return View("sweet_alerts");
    }

    [Route("/task-kanban-board")]
    public IActionResult task_kanban_board()
    {
        return View("task_kanban_board");
    }

    [Route("/task-list-view")]
    public IActionResult task_list_view()
    {
        return View("task_list_view");
    }

    [Route("/to-do-list")]
    public IActionResult to_do_list()
    {
        return View("to_do_list");
    }

}
