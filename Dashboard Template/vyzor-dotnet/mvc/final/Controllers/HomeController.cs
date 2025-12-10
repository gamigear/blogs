using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using vyzor.Models;

namespace vyzor.Controllers;

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

    [Route("/add-product")]
    public IActionResult add_product()
    {
        return View("add_product");
    }

    [Route("/cart")]
    public IActionResult cart()
    {
        return View("cart");
    }

    [Route("/checkout")]
    public IActionResult checkout()
    {
        return View("checkout");
    }

    [Route("/crm-companies")]
    public IActionResult crm_companies()
    {
        return View("crm_companies");
    }

    [Route("/crm-contacts")]
    public IActionResult crm_contacts()
    {
        return View("crm_contacts");
    }

    [Route("/crm-deals")]
    public IActionResult crm_deals()
    {
        return View("crm_deals");
    }

    [Route("/crm-leads")]
    public IActionResult crm_leads()
    {
        return View("crm_leads");
    }

    [Route("/crypto-buy-sell")]
    public IActionResult crypto_buy_sell()
    {
        return View("crypto_buy_sell");
    }

    [Route("/crypto-currency-exchange")]
    public IActionResult crypto_currency_exchange()
    {
        return View("crypto_currency_exchange");
    }

    [Route("/crypto-marketcap")]
    public IActionResult crypto_marketcap()
    {
        return View("crypto_marketcap");
    }

    [Route("/crypto-transactions")]
    public IActionResult crypto_transactions()
    {
        return View("crypto_transactions");
    }

    [Route("/crypto-wallet")]
    public IActionResult crypto_wallet()
    {
        return View("crypto_wallet");
    }

    [Route("/customers-list")]
    public IActionResult customers_list()
    {
        return View("customers_list");
    }

    [Route("/index1")]
    public IActionResult index1()
    {
        return View("index1");
    }

    [Route("/index2")]
    public IActionResult index2()
    {
        return View("index2");
    }

    [Route("/index3")]
    public IActionResult index3()
    {
        return View("index3");
    }

    [Route("/index4")]
    public IActionResult index4()
    {
        return View("index4");
    }

    [Route("/index5")]
    public IActionResult index5()
    {
        return View("index5");
    }

    [Route("/index6")]
    public IActionResult index6()
    {
        return View("index6");
    }

    [Route("/index7")]
    public IActionResult index7()
    {
        return View("index7");
    }

    [Route("/index8")]
    public IActionResult index8()
    {
        return View("index8");
    }

    [Route("/index9")]
    public IActionResult index9()
    {
        return View("index9");
    }

    [Route("/index10")]
    public IActionResult index10()
    {
        return View("index10");
    }

    [Route("/index11")]
    public IActionResult index11()
    {
        return View("index11");
    }

    [Route("/index12")]
    public IActionResult index12()
    {
        return View("index12");
    }

    [Route("/index13")]
    public IActionResult index13()
    {
        return View("index13");
    }

    [Route("/index14")]
    public IActionResult index14()
    {
        return View("index14");
    }

    [Route("/index15")]
    public IActionResult index15()
    {
        return View("index15");
    }

    [Route("/job-candidate-details")]
    public IActionResult job_candidate_details()
    {
        return View("job_candidate_details");
    }

    [Route("/job-candidate-search")]
    public IActionResult job_candidate_search()
    {
        return View("job_candidate_search");
    }

    [Route("/job-company-search")]
    public IActionResult job_company_search()
    {
        return View("job_company_search");
    }

    [Route("/job-details")]
    public IActionResult job_details()
    {
        return View("job_details");
    }

    [Route("/job-post")]
    public IActionResult job_post()
    {
        return View("job_post");
    }

    [Route("/job-search")]
    public IActionResult job_search()
    {
        return View("job_search");
    }

    [Route("/jobs-list")]
    public IActionResult jobs_list()
    {
        return View("jobs_list");
    }

    [Route("/nft-create")]
    public IActionResult nft_create()
    {
        return View("nft_create");
    }

    [Route("/nft-details")]
    public IActionResult nft_details()
    {
        return View("nft_details");
    }

    [Route("/nft-live-auction")]
    public IActionResult nft_live_auction()
    {
        return View("nft_live_auction");
    }

    [Route("/nft-marketplace")]
    public IActionResult nft_marketplace()
    {
        return View("nft_marketplace");
    }

    [Route("/nft-wallet-integration")]
    public IActionResult nft_wallet_integration()
    {
        return View("nft_wallet_integration");
    }

    [Route("/orders-details")]
    public IActionResult orders_details()
    {
        return View("orders_details");
    }

    [Route("/orders")]
    public IActionResult orders()
    {
        return View("orders");
    }

    [Route("/product-details")]
    public IActionResult product_details()
    {
        return View("product_details");
    }

    [Route("/products")]
    public IActionResult products()
    {
        return View("products");
    }

    [Route("/projects-create")]
    public IActionResult projects_create()
    {
        return View("projects_create");
    }

    [Route("/projects-list")]
    public IActionResult projects_list()
    {
        return View("projects_list");
    }

    [Route("/projects-overview")]
    public IActionResult projects_overview()
    {
        return View("projects_overview");
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
