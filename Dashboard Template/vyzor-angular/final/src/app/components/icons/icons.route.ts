import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'icons',children:[
    {
      path: 'icons',
      loadComponent: () =>
        import('./icons/icons').then((m) => m.Icons),
    },
  ]
}

];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class iconsRoutingModule {
  static routes = admin;
}
