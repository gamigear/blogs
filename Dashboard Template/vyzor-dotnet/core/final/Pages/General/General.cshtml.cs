using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vyzor.Pages;

public class GeneralModel : PageModel
{
    private readonly ILogger<GeneralModel> _logger;

    public GeneralModel(ILogger<GeneralModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }



}
