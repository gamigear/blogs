import { Routes } from '@angular/router';


export const Full_Content_Routes: Routes  = [
    { path:'',
        loadChildren: () => import('../../components/dashboards/dashboards.routes').then(r => r.dashboardRoutingModule)
    },
    { path:'',
      loadChildren: () => import('../../components/applications/applications.routes').then(r => r.applicationRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../app/components/pages/form/form.routes').then(r => r.FormRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/general/uielements/uielements.routes').then(r => r.uielementsRoutingModule)
  },
  { path: '',
    loadChildren: () => import('../../components/general/advanced-ui/advanced.routes').then(r => r.AdvancedRoutingModule)
},
{
    path: '',
    loadChildren: () => import('../../../app/components/pages/pages.route').then(r => r.pagesRoutingModule)
  },
  { path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.route').then(r => r.widgetsRoutingModule)
},
{
  path: '',
  loadChildren: () => import('../../components/icons/icons.route').then(r => r.iconsRoutingModule)
},
{ path: '',
  loadChildren: () => import('../../components/tables/tables.routes').then(r => r.TablesRoutingModule)
},
{ path: '',
  loadChildren: () => import('../../components/charts/charts.routes').then(r => r.ChartRoutingModule)
},
{
  path: 'maps',
  loadChildren: () => import('../../components/map/map.route').then(r => r.mapRoutingModule)
},
{ path: '',
  loadChildren: () => import('../../components/general/utilities/utilities.routes').then(r => r.UtilitiesRoutingModule)
}
 ];
