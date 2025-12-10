using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vyzor.Pages;

public class WidgetsModel : PageModel
{
    private readonly ILogger<WidgetsModel> _logger;

    public WidgetsModel(ILogger<WidgetsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }



}
