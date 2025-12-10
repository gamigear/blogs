using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vyzor.Pages;

public class MapsModel : PageModel
{
    private readonly ILogger<MapsModel> _logger;

    public MapsModel(ILogger<MapsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }



}
