import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'utilities',
    children: [
      {
        path: 'avatars',
        title: 'Vyzor - avatars',
        loadComponent: () => import('./avatars/avatars').then(m => m.Avatars),
      },
      {
        path: 'border',
        title: 'Vyzor - Border',
        loadComponent: () => import('./border/border').then(m => m.Border),
      },
      {
        path: 'flex',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./flex/flex').then(m => m.Flex),
      },
      {
        path: 'breakpoints',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./breakpoints/breakpoints').then(m => m.Breakpoints),
      },
      {
        path: 'colors',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./colors/colors').then(m => m.Colors),
      },
      {
        path: 'columns',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./columns/columns').then(m => m.Columns),
      },
      {
        path: 'gutters',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./gutters/gutters').then(m => m.Gutters),
      },
      {
        path: 'helpers',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./helpers/helpers').then(m => m.Helpers),
      },
      {
        path: 'position',
        title: 'Vyzor - Position',
        loadComponent: () => import('./position/position').then(m => m.Position),
      },
      {
        path: 'additional-content',
        title: 'Vyzor - Flex',
        loadComponent: () => import('./additional-content/additional-content').then(m => m.AdditionalContent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesRoutingModule {
  static routes=routes

}
