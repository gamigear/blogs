import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'uielements',children:[
  {
  path: 'alerts',
  loadComponent: () =>
    import('./alerts/alerts').then((m) => m.Alerts),
 },
 {
  path: 'avatars',
  loadComponent: () =>
    import('./avatars/avatars').then((m) => m.Avatars),
 },
{
  path: 'breadcrumbs',
  loadComponent: () =>
    import('./breadcrumbs/breadcrumb').then((m) => m.Breadcrumb),

  },
{
  path: 'buttons',
  loadComponent: () =>
    import('./buttons/buttons').then((m) => m.Buttons),
  },
{
  path: 'badge',
  loadComponent: () =>
    import('./badge/badge').then(
      (m) => m.Badge
    )
},

{
  path: 'buttongroup',
  loadComponent: () =>
    import('./buttongroup/buttongroup').then(
      (m) => m.Buttongroup
    ),

  },
{
  path: 'cards',
  loadComponent: () =>
    import('./cards/cards').then((m) => m.Cards)},

{
  path: 'dropdowns',
  loadComponent: () =>
    import('./dropdowns/dropdowns').then((m) => m.Dropdowns),
    },
{
  path: 'images-figures',
  loadComponent: () =>
    import('./images-figures/images-figures').then((m) => m.ImagesFigures),
  },
{
  path: 'listgroup',
  loadComponent: () =>
    import('./listgroup/listgroup').then((m) => m.Listgroup),

  },
{
  path: 'navtabs',
  loadComponent: () =>
    import('./navtabs/navtabs').then((m) => m.Navtabs),
  },
{
  path: 'objectfit',
  loadComponent: () =>
    import('./objectfit/objectfit').then((m) => m.Objectfit),
    },
{
  path: 'pagination',
  loadComponent: () =>
    import('./pagination/pagination').then((m) => m.Pagination),

  },
{
  path: 'popovers',
  loadComponent: () =>
    import('./popovers/popovers').then((m) => m.Popovers),
   },

{
  path: 'toasts',
  loadComponent: () =>
    import('./toasts/toasts').then((m) => m.Toasts),
},
{
  path: 'progress',
  loadComponent: () =>
    import('./progress/progress').then((m) => m.Progress),
   },
{
    path: 'spinners',
    loadComponent: () =>
      import('./spinners/spinners').then((m) => m.Spinners),
         },
  {
    path: 'toasts',
    loadComponent: () =>
      import('./toasts/toasts').then((m) => m.Toasts),
       },
  {
    path: 'tooltips',
    loadComponent: () =>
      import('./tooltips/tooltips').then((m) => m.Tooltips),
         },
  {
    path: 'typography',
    loadComponent: () =>
      import('./typography/typography').then((m) => m.Typography),

  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}
