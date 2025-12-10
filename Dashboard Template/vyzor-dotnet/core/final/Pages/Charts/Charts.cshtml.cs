using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vyzor.Pages;

public class ChartsModel : PageModel
{
    private readonly ILogger<ChartsModel> _logger;

    public ChartsModel(ILogger<ChartsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }



}
