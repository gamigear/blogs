<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardsController extends AbstractController
{

   // Redirect '/' to '/index'
    #[Route('/', name: 'home_redirect')]
    public function redirectToIndex(): Response
    {
        return $this->redirectToRoute('app_index');
    }

    // Main dashboard page
    #[Route('/index', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('dashboards/index.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }

    // #[Route('/', name: '')]
    // public function index(): Response
    // {
    //     return $this->render('dashboards/index.html.twig', [
    //         'controller_name' => 'DashboardsController',
    //     ]);
    // }

    // #[Route('/index', name: 'app_index')]
    // public function indexact(): Response
    // {
    //     return $this->render('dashboards/index.html.twig', [
    //         'controller_name' => 'DashboardsController',
    //     ]);
    // }

    #[Route('/add-product', name: 'app_add_product')]
    public function addProduct(): Response
    {
        return $this->render('dashboards/add-product.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/cart', name: 'app_cart')]
    public function cart(): Response
    {
        return $this->render('dashboards/cart.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/checkout', name: 'app_checkout')]
    public function checkout(): Response
    {
        return $this->render('dashboards/checkout.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crm-companies', name: 'app_crm_companies')]
    public function crmCompanies(): Response
    {
        return $this->render('dashboards/crm-companies.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crm-contacts', name: 'app_crm_contacts')]
    public function crmContacts(): Response
    {
        return $this->render('dashboards/crm-contacts.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crm-deals', name: 'app_crm_deals')]
    public function crmDeals(): Response
    {
        return $this->render('dashboards/crm-deals.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crm-leads', name: 'app_crm_leads')]
    public function crmLeads(): Response
    {
        return $this->render('dashboards/crm-leads.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crypto-buy-sell', name: 'app_crypto_buy_sell')]
    public function cryptoBuySell(): Response
    {
        return $this->render('dashboards/crypto-buy-sell.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crypto-currency-exchange', name: 'app_crypto_currency_exchange')]
    public function cryptoCurrencyExchange(): Response
    {
        return $this->render('dashboards/crypto-currency-exchange.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crypto-marketcap', name: 'app_crypto_marketcap')]
    public function cryptoMarketcap(): Response
    {
        return $this->render('dashboards/crypto-marketcap.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crypto-transactions', name: 'app_crypto_transactions')]
    public function cryptoTransactions(): Response
    {
        return $this->render('dashboards/crypto-transactions.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/crypto-wallet', name: 'app_crypto_wallet')]
    public function cryptoWallet(): Response
    {
        return $this->render('dashboards/crypto-wallet.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/customers-list', name: 'app_customers_list')]
    public function customersList(): Response
    {
        return $this->render('dashboards/customers-list.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }

    #[Route('/index1', name: 'app_index1')]
    public function index1(): Response
    {
        return $this->render('dashboards/index1.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index2', name: 'app_index2')]
    public function index2(): Response
    {
        return $this->render('dashboards/index2.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index3', name: 'app_index3')]
    public function index3(): Response
    {
        return $this->render('dashboards/index3.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index4', name: 'app_index4')]
    public function index4(): Response
    {
        return $this->render('dashboards/index4.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index5', name: 'app_index5')]
    public function index5(): Response
    {
        return $this->render('dashboards/index5.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index6', name: 'app_index6')]
    public function index6(): Response
    {
        return $this->render('dashboards/index6.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index7', name: 'app_index7')]
    public function index7(): Response
    {
        return $this->render('dashboards/index7.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index8', name: 'app_index8')]
    public function index8(): Response
    {
        return $this->render('dashboards/index8.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index9', name: 'app_index9')]
    public function index9(): Response
    {
        return $this->render('dashboards/index9.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index10', name: 'app_index10')]
    public function index10(): Response
    {
        return $this->render('dashboards/index10.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index11', name: 'app_index11')]
    public function index11(): Response
    {
        return $this->render('dashboards/index11.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index12', name: 'app_index12')]
    public function index12(): Response
    {
        return $this->render('dashboards/index12.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index13', name: 'app_index13')]
    public function index13(): Response
    {
        return $this->render('dashboards/index13.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index14', name: 'app_index14')]
    public function index14(): Response
    {
        return $this->render('dashboards/index14.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/index15', name: 'app_index15')]
    public function index15(): Response
    {
        return $this->render('dashboards/index15.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-candidate-details', name: 'app_job_candidate_details')]
    public function jobCandidateDetails(): Response
    {
        return $this->render('dashboards/job-candidate-details.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-candidate-search', name: 'app_job_candidate_search')]
    public function jobCandidateSearch(): Response
    {
        return $this->render('dashboards/job-candidate-search.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-company-search', name: 'app_job_company_search')]
    public function jobCompanySearch(): Response
    {
        return $this->render('dashboards/job-company-search.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-details', name: 'app_job_details')]
    public function jobDetails(): Response
    {
        return $this->render('dashboards/job-details.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-post', name: 'app_job_post')]
    public function jobPost(): Response
    {
        return $this->render('dashboards/job-post.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/job-search', name: 'app_job_search')]
    public function jobSearch(): Response
    {
        return $this->render('dashboards/job-search.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/jobs-list', name: 'app_jobs_list')]
    public function jobsList(): Response
    {
        return $this->render('dashboards/jobs-list.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/nft-create', name: 'app_nft_create')]
    public function nftCreate(): Response
    {
        return $this->render('dashboards/nft-create.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/nft-details', name: 'app_nft_details')]
    public function nftDetails(): Response
    {
        return $this->render('dashboards/nft-details.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/nft-live-auction', name: 'app_nft_live_auction')]
    public function nftLiveAuction(): Response
    {
        return $this->render('dashboards/nft-live-auction.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/nft-marketplace', name: 'app_nft_marketplace')]
    public function nftMarketplace(): Response
    {
        return $this->render('dashboards/nft-marketplace.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/nft-wallet-integration', name: 'app_nft_wallet_integration')]
    public function nftWalletIntegration(): Response
    {
        return $this->render('dashboards/nft-wallet-integration.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/orders-details', name: 'app_orders_details')]
    public function ordersDetails(): Response
    {
        return $this->render('dashboards/orders-details.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/orders', name: 'app_orders')]
    public function orders(): Response
    {
        return $this->render('dashboards/orders.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/product-details', name: 'app_product_details')]
    public function productDetails(): Response
    {
        return $this->render('dashboards/product-details.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/products', name: 'app_products')]
    public function products(): Response
    {
        return $this->render('dashboards/products.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/projects-create', name: 'app_projects_create')]
    public function projectsCreate(): Response
    {
        return $this->render('dashboards/projects-create.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/projects-list', name: 'app_projects_list')]
    public function projectsList(): Response
    {
        return $this->render('dashboards/projects-list.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
    
    #[Route('/projects-overview', name: 'app_projects_overview')]
    public function projectsOverview(): Response
    {
        return $this->render('dashboards/projects-overview.html.twig', [
            'controller_name' => 'DashboardsController',
        ]);
    }
}
