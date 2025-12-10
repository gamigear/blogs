using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class GeneralController : Controller
{
    private readonly ILogger<GeneralController> _logger;

    public GeneralController(ILogger<GeneralController> logger)
    {
        _logger = logger;
    }

    [Route("/accordions-collpase")]
    public IActionResult accordions_collpase()
    {
        return View("accordions_collpase");
    }

    [Route("/alerts")]
    public IActionResult alerts()
    {
        return View("alerts");
    }

    [Route("/avatars")]
    public IActionResult avatars()
    {
        return View("avatars");
    }

    [Route("/badge")]
    public IActionResult badge()
    {
        return View("badge");
    }

    [Route("/borders")]
    public IActionResult borders()
    {
        return View("borders");
    }

    [Route("/breadcrumb")]
    public IActionResult breadcrumb()
    {
        return View("breadcrumb");
    }

    [Route("/breakpoints")]
    public IActionResult breakpoints()
    {
        return View("breakpoints");
    }

    [Route("/buttongroup")]
    public IActionResult buttongroup()
    {
        return View("buttongroup");
    }

    [Route("/buttons")]
    public IActionResult buttons()
    {
        return View("buttons");
    }

    [Route("/cards")]
    public IActionResult cards()
    {
        return View("cards");
    }

    [Route("/carousel")]
    public IActionResult carousel()
    {
        return View("carousel");
    }

    [Route("/colors")]
    public IActionResult colors()
    {
        return View("colors");
    }

    [Route("/columns")]
    public IActionResult columns()
    {
        return View("columns");
    }

    [Route("/css-grid")]
    public IActionResult css_grid()
    {
        return View("css_grid");
    }

    [Route("/draggable-cards")]
    public IActionResult draggable_cards()
    {
        return View("draggable_cards");
    }

    [Route("/dropdowns")]
    public IActionResult dropdowns()
    {
        return View("dropdowns");
    }

    [Route("/flex")]
    public IActionResult flex()
    {
        return View("flex");
    }

    [Route("/gutters")]
    public IActionResult gutters()
    {
        return View("gutters");
    }

    [Route("/helpers")]
    public IActionResult helpers()
    {
        return View("helpers");
    }

    [Route("/images-figures")]
    public IActionResult images_figures()
    {
        return View("images_figures");
    }

    [Route("/links-interactions")]
    public IActionResult links_interactions()
    {
        return View("links_interactions");
    }

    [Route("/listgroup")]
    public IActionResult listgroup()
    {
        return View("listgroup");
    }

    [Route("/media-player")]
    public IActionResult media_player()
    {
        return View("media_player");
    }

    [Route("/modals-closes")]
    public IActionResult modals_closes()
    {
        return View("modals_closes");
    }

    [Route("/more")]
    public IActionResult more()
    {
        return View("more");
    }

    [Route("/navbar")]
    public IActionResult navbar()
    {
        return View("navbar");
    }

    [Route("/navs-tabs")]
    public IActionResult navs_tabs()
    {
        return View("navs_tabs");
    }

    [Route("/object-fit")]
    public IActionResult object_fit()
    {
        return View("object_fit");
    }

    [Route("/offcanvas")]
    public IActionResult offcanvas()
    {
        return View("offcanvas");
    }

    [Route("/pagination")]
    public IActionResult pagination()
    {
        return View("pagination");
    }

    [Route("/placeholders")]
    public IActionResult placeholders()
    {
        return View("placeholders");
    }

    [Route("/popovers")]
    public IActionResult popovers()
    {
        return View("popovers");
    }

    [Route("/position")]
    public IActionResult position()
    {
        return View("position");
    }

    [Route("/progress")]
    public IActionResult progress()
    {
        return View("progress");
    }

    [Route("/ratings")]
    public IActionResult ratings()
    {
        return View("ratings");
    }

    [Route("/ribbons")]
    public IActionResult ribbons()
    {
        return View("ribbons");
    }

    [Route("/scrollspy")]
    public IActionResult scrollspy()
    {
        return View("scrollspy");
    }

    [Route("/sortable-list")]
    public IActionResult sortable_list()
    {
        return View("sortable_list");
    }

    [Route("/spinners")]
    public IActionResult spinners()
    {
        return View("spinners");
    }

    [Route("/swiperjs")]
    public IActionResult swiperjs()
    {
        return View("swiperjs");
    }

    [Route("/toasts")]
    public IActionResult toasts()
    {
        return View("toasts");
    }

    [Route("/tooltips")]
    public IActionResult tooltips()
    {
        return View("tooltips");
    }

    [Route("/tour")]
    public IActionResult tour()
    {
        return View("tour");
    }

    [Route("/typography")]
    public IActionResult typography()
    {
        return View("typography");
    }

}
