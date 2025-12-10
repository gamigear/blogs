import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales').then((m) => m.Sales),
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics').then(
      (m) => m.Analytics
    ),
},
{
  path: 'ecommerce/dashboard',
  loadComponent: () =>
    import('./ecommerce/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'ecommerce/addproduct',
  loadComponent: () =>
    import('./ecommerce/addproducts/addproducts').then((m) => m.Addproducts),
},
{
  path: 'ecommerce/cart',
  loadComponent: () =>
    import('./ecommerce/cart/cart').then((m) => m.Cart),
},
{
  path: 'ecommerce/checkout',
  loadComponent: () =>
    import('./ecommerce/checkout/checkout').then((m) => m.Checkout),
},
{
  path: 'ecommerce/customers',
  loadComponent: () =>
    import('./ecommerce/customers/customers').then((m) => m.Customers),
},
{
  path: 'ecommerce/order-details',
  loadComponent: () =>
    import('./ecommerce/order-details/order-details').then((m) => m.OrderDetails),
},
{
  path: 'ecommerce/orders',
  loadComponent: () =>
    import('./ecommerce/orders/orders').then((m) => m.Orders),
},
{
  path: 'ecommerce/products',
  loadComponent: () =>
    import('./ecommerce/products/products').then((m) => m.Products),
},
{
  path: 'ecommerce/productdetails',
  loadComponent: () =>
    import('./ecommerce/productdetails/productdetails').then((m) => m.Productdetails),
},
{
  path: 'crypto/dashboard',
  loadComponent: () =>
    import('./crypto/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'crypto/transactions',
  loadComponent: () =>
    import('./crypto/transactions/transactions').then((m) => m.Transactions),
},
{
  path: 'crypto/currency-exchange',
  loadComponent: () =>
    import('./crypto/exchange/exchange').then((m) => m.Exchange),
},
{
  path: 'crypto/buy-sell',
  loadComponent: () =>
    import('./crypto/buy-sell/buy-sell').then((m) => m.BuySell),
},
{
  path: 'crypto/marketcap',
  loadComponent: () =>
    import('./crypto/marketcap/marketcap').then((m) => m.Marketcap),
},
{
  path: 'crypto/wallet',
  loadComponent: () =>
    import('./crypto/wallet/wallet').then((m) => m.Wallet),
},

{
  path: 'crm/dashboard',
  loadComponent: () =>
    import('./crm/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'crm/contacts',
  loadComponent: () =>
    import('./crm/contacts/contacts').then((m) => m.Contacts),
},
{
  path: 'crm/companies',
  loadComponent: () =>
    import('./crm/companies/companies').then((m) => m.Companies),
},
{
  path: 'crm/deals',
  loadComponent: () =>
    import('./crm/deals/deals').then((m) => m.Deals),
},
{
  path: 'crm/leads',
  loadComponent: () =>
    import('./crm/leads/leads').then((m) => m.Leads),
},
{
  path: 'projects/dashboard',
  loadComponent: () =>
    import('./projects/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'projects/projects-list',
  loadComponent: () =>
    import('./projects/projects-list/projects-list').then((m) => m.ProjectsList),
},
{
  path: 'projects/project-overview',
  loadComponent: () =>
    import('./projects/project-overview/project-overview').then((m) => m.ProjectOverview),
},
{
  path: 'projects/create-project',
  loadComponent: () =>
    import('./projects/create-project/create-project').then((m) => m.CreateProject),
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm').then((m) => m.Hrm),
},
{
  path: 'nft/dashboard',
  loadComponent: () =>
    import('./nft/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'nft/market-place',
  loadComponent: () =>
    import('./nft/market-place/market-place').then((m) => m.MarketPlace),
},
{
  path: 'nft/nft-details',
  loadComponent: () =>
    import('./nft/nft-details/nft-details').then((m) => m.NftDetails),
},
{
  path: 'nft/create-nft',
  loadComponent: () =>
    import('./nft/create-nft/create-nft').then((m) => m.CreateNft),
},
{
  path: 'nft/wallet-integration',
  loadComponent: () =>
    import('./nft/wallet-integration/wallet-integration').then((m) => m.WalletIntegration),
},
{
  path: 'nft/live-auction',
  loadComponent: () =>
    import('./nft/live-auction/live-auction').then((m) => m.LiveAuction),
},

{
  path: 'jobs/dashboard',
  loadComponent: () =>
    import('./jobs/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'jobs/job-details',
  loadComponent: () =>
    import('./jobs/job-details/job-details').then((m) => m.JobDetails),
},
{
  path: 'jobs/search-company',
  loadComponent: () =>
    import('./jobs/search-company/search-company').then((m) => m.SearchCompany),
},
{
  path: 'jobs/search-jobs',
  loadComponent: () =>
    import('./jobs/search-jobs/search-jobs').then((m) => m.SearchJobs),
},
{
  path: 'jobs/dashboard',
  loadComponent: () =>
    import('./jobs/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'jobs/job-post',
  loadComponent: () =>
    import('./jobs/job-post/job-post').then((m) => m.JobPost),
},
{
  path: 'jobs/jobs-list',
  loadComponent: () =>
    import('./jobs/jobs-list/jobs-list').then((m) => m.JobsList),
},
{
  path: 'jobs/search-candidates',
  loadComponent: () =>
    import('./jobs/search-candidate/search-candidate').then((m) => m.SearchCandidate),
},
{
  path: 'jobs/candidate-details',
  loadComponent: () =>
    import('./jobs/candidate-details/candidate-details').then((m) => m.CandidateDetails),
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses').then((m) => m.Courses),
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks').then((m) => m.Stocks),
},
{
  path: 'medical',
  loadComponent: () =>
    import('./medical/medical').then((m) => m.Medical),
},
{
  path: 'pos-system',
  loadComponent: () =>
    import('./pos-system/pos-system').then((m) => m.PosSystem),
},
{
  path: 'podcast',
  loadComponent: () =>
    import('./podcast/podcast').then((m) => m.Podcast),
},
{
  path: 'school',
  loadComponent: () =>
    import('./school/school').then((m) => m.School),
},
{
  path: 'social-media',
  loadComponent: () =>
    import('./social-media/social-media').then((m) => m.SocialMedia),
}
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
