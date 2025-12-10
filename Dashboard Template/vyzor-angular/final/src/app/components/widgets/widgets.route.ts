import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./widget/widget').then((m) => m.Widget),
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class widgetsRoutingModule {
  static routes = admin;
}
