import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";





const routes: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'basictables',
        title: 'Vyzor - Basictables',
        loadComponent: () => import('./basic-tables/basic-tables').then(m => m.BasicTables),
      },
      {
        path: 'gridjstables',
        title: 'Vyzor - Gridjstables',
        loadComponent: () => import('./gridjs-table/gridjs-table').then(m => m.GridjsTable),
      },
      {
        path: 'ngx-easy-table',
        title: 'Vyzor - Ngx Easy Table',
        loadComponent: () => import('./ngx-easy-table/ngx-easy-table').then(m => m.NgxEasyTable),
      },
      {
        path: 'angular-material-tables',
        title: 'Vyzor - Angular Material Tables',
        loadComponent: () => import('./angular-material-table/angular-material-table').then(m => m.AngularMaterialTable),
      },
    ],
  },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
  static routes=routes

 }
