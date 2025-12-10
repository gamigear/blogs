using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vyzor.Pages;

public class ApplicationsModel : PageModel
{
    private readonly ILogger<ApplicationsModel> _logger;

    public ApplicationsModel(ILogger<ApplicationsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }



}
