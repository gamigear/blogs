using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

public class PagesController : Controller
{
    private readonly ILogger<PagesController> _logger;

    public PagesController(ILogger<PagesController> logger)
    {
        _logger = logger;
    }

    [Route("/blog-create")]
    public IActionResult blog_create()
    {
        return View("blog_create");
    }

    [Route("/blog-details")]
    public IActionResult blog_details()
    {
        return View("blog_details");
    }

    [Route("/blog")]
    public IActionResult blog()
    {
        return View("blog");
    }

    [Route("/coming-soon")]
    public IActionResult coming_soon()
    {
        return View("coming_soon");
    }

    [Route("/create-password-basic")]
    public IActionResult create_password_basic()
    {
        return View("create_password_basic");
    }

    [Route("/create-password-cover")]
    public IActionResult create_password_cover()
    {
        return View("create_password_cover");
    }

    [Route("/emptypage")]
    public IActionResult emptypage()
    {
        return View("emptypage");
    }

    [Route("/error401")]
    public IActionResult error401()
    {
        return View("error401");
    }

    [Route("/error404")]
    public IActionResult error404()
    {
        return View("error404");
    }

    [Route("/error500")]
    public IActionResult error500()
    {
        return View("error500");
    }

    [Route("/faqs")]
    public IActionResult faqs()
    {
        return View("faqs");
    }

    [Route("/floating-labels")]
    public IActionResult floating_labels()
    {
        return View("floating_labels");
    }

    [Route("/form-advanced")]
    public IActionResult form_advanced()
    {
        return View("form_advanced");
    }

    [Route("/form-check-radios")]
    public IActionResult form_check_radios()
    {
        return View("form_check_radios");
    }

    [Route("/form-color-pickers")]
    public IActionResult form_color_pickers()
    {
        return View("form_color_pickers");
    }

    [Route("/form-datetime-pickers")]
    public IActionResult form_datetime_pickers()
    {
        return View("form_datetime_pickers");
    }

    [Route("/form-file-uploads")]
    public IActionResult form_file_uploads()
    {
        return View("form_file_uploads");
    }

    [Route("/form-input-group")]
    public IActionResult form_input_group()
    {
        return View("form_input_group");
    }

    [Route("/form-input-masks")]
    public IActionResult form_input_masks()
    {
        return View("form_input_masks");
    }

    [Route("/form-inputs")]
    public IActionResult form_inputs()
    {
        return View("form_inputs");
    }

    [Route("/form-layout")]
    public IActionResult form_layout()
    {
        return View("form_layout");
    }

    [Route("/form-range")]
    public IActionResult form_range()
    {
        return View("form_range");
    }

    [Route("/form-select")]
    public IActionResult form_select()
    {
        return View("form_select");
    }

    [Route("/form-select2")]
    public IActionResult form_select2()
    {
        return View("form_select2");
    }

    [Route("/form-validation")]
    public IActionResult form_validation()
    {
        return View("form_validation");
    }

    [Route("/form-wizards")]
    public IActionResult form_wizards()
    {
        return View("form_wizards");
    }

    [Route("/invoice-create")]
    public IActionResult invoice_create()
    {
        return View("invoice_create");
    }

    [Route("/invoice-details")]
    public IActionResult invoice_details()
    {
        return View("invoice_details");
    }

    [Route("/invoice-list")]
    public IActionResult invoice_list()
    {
        return View("invoice_list");
    }

    [Route("/landing")]
    public IActionResult landing()
    {
        return View("landing");
    }

    [Route("/lockscreen-basic")]
    public IActionResult lockscreen_basic()
    {
        return View("lockscreen_basic");
    }

    [Route("/lockscreen-cover")]
    public IActionResult lockscreen_cover()
    {
        return View("lockscreen_cover");
    }

    [Route("/pricing")]
    public IActionResult pricing()
    {
        return View("pricing");
    }

    [Route("/profile-settings")]
    public IActionResult profile_settings()
    {
        return View("profile_settings");
    }

    [Route("/profile")]
    public IActionResult profile()
    {
        return View("profile");
    }

    [Route("/quill-editor")]
    public IActionResult quill_editor()
    {
        return View("quill_editor");
    }

    [Route("/reset-password-basic")]
    public IActionResult reset_password_basic()
    {
        return View("reset_password_basic");
    }

    [Route("/reset-password-cover")]
    public IActionResult reset_password_cover()
    {
        return View("reset_password_cover");
    }

    [Route("/search-results")]
    public IActionResult search_results()
    {
        return View("search_results");
    }

    [Route("/sign-in-basic")]
    public IActionResult sign_in_basic()
    {
        return View("sign_in_basic");
    }

    [Route("/sign-in-cover")]
    public IActionResult sign_in_cover()
    {
        return View("sign_in_cover");
    }

    [Route("/sign-up-basic")]
    public IActionResult sign_up_basic()
    {
        return View("sign_up_basic");
    }

    [Route("/sign-up-cover")]
    public IActionResult sign_up_cover()
    {
        return View("sign_up_cover");
    }

    [Route("/team")]
    public IActionResult team()
    {
        return View("team");
    }

    [Route("/terms-conditions")]
    public IActionResult terms_conditions()
    {
        return View("terms_conditions");
    }

    [Route("/testimonials")]
    public IActionResult testimonials()
    {
        return View("testimonials");
    }

    [Route("/timeline")]
    public IActionResult timeline()
    {
        return View("timeline");
    }

    [Route("/two-step-verification-basic")]
    public IActionResult two_step_verification_basic()
    {
        return View("two_step_verification_basic");
    }

    [Route("/two-step-verification-cover")]
    public IActionResult two_step_verification_cover()
    {
        return View("two_step_verification_cover");
    }

    [Route("/under-maintenance")]
    public IActionResult under_maintenance()
    {
        return View("under_maintenance");
    }

}
