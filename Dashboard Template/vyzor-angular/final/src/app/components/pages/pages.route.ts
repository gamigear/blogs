

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const admin: Routes = [
  {path:'pages',children:[
    {
      path: 'empty-page',
      loadComponent: () =>
        import('./empty-page/empty-page').then((m) => m.EmptyPage),
    },

    {
      path: 'blog/blog',
      loadComponent: () =>
        import('./blog/blog/blog').then((m) => m.Blog),
    },
    {
      path: 'blog/blogdetails',
      loadComponent: () =>
        import('./blog/blogdetails/blogdetails').then((m) => m.Blogdetails),
    },
    {
      path: 'blog/create-blog',
      loadComponent: () =>
        import('./blog/create-blog/create-blog').then((m) => m.CreateBlog),
    },
    {
      path: 'faqs',
      loadComponent: () =>
        import('./faqs/faqs').then((m) => m.Faqs),
    },

    {
      path: 'invoice/createinvoice',
      loadComponent: () =>
        import('./invoice/createinvoice/createinvoice').then((m) => m.Createinvoice),
    },
    {
      path: 'invoice/invoicedetails',
      loadComponent: () =>
        import('./invoice/invoicedetails/invoicedetails').then((m) => m.Invoicedetails),
    },
    {
      path: 'invoice/invoicelist',
      loadComponent: () =>
        import('./invoice/invoicelist/invoicelist').then((m) => m.Invoicelist),
    },


    {
      path: 'pricing',
      loadComponent: () =>
        import('./pricing/pricing').then((m) => m.Pricing),
    },
    {
      path: 'profile',
      loadComponent: () =>
        import('./profile/profile').then((m) => m.Profile),
    },
    {
      path: 'profile-settings',
      loadComponent: () =>
        import('./profile-settings/profile-settings').then((m) => m.ProfileSettings),
    },
    {
      path: 'testimonials',
      loadComponent: () =>
        import('./testimonials/testimonials').then((m) => m.Testimonials),
    },
    {
      path: 'search',
      loadComponent: () =>
        import('./search/search').then((m) => m.Search),
    },
    {
      path: 'team',
      loadComponent: () =>
        import('./team/team').then((m) => m.Team),
    },
    {
      path: 'terms',
      loadComponent: () =>
        import('./terms/terms').then((m) => m.Terms),
    },

    {
      path: 'timeline',
      loadComponent: () =>
        import('./timeline/timeline').then((m) => m.Timeline),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}
