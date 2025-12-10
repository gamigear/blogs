import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'advancedui',
    children: [
      {
        path: 'accordions_collpase',
        title: 'Vyzor - Accordion',
        loadComponent: () => import('./accordion/accordion').then(m => m.Accordion),
      },
      {
        path: 'carousel',
        title: 'Vyzor - Carousel',
        loadComponent: () => import('./carousel/carousel').then(m => m.Carousel),
      },
      {
        path: 'modals',
        title: 'Vyzor - Modals & Closes',
        loadComponent: () => import('./modals/modals').then(m => m.Modals),
      },
      {
        path: 'draggable-cards',
        title: 'Vyzor - draggable Crads',
        loadComponent: () => import('./draggable-cards/draggable-cards').then(m => m.DraggableCards),
      },
      {
        path: 'media-player',
        title: 'Vyzor - media-player',
        loadComponent: () => import('./media-player/media-player').then(m => m.MediaPlayer),
      },
      {
        path: 'ratings',
        title: 'Vyzor - Ratings',
        loadComponent: () => import('./ratings/ratings').then(m => m.Ratings),
      },
      {
        path: 'sortablejs',
        title: 'Vyzor - Sortable Js',
        loadComponent: () => import('./sortablejs/sortablejs').then(m => m.Sortablejs),
      },
      {
        path: 'ribbons',
        title: 'Vyzor - Ribbons',
        loadComponent: () => import('./ribbons/ribbons').then(m => m.Ribbons),
      },
      {
        path: 'scrollspy',
        title: 'Vyzor - Scrollspy',
        loadComponent: () => import('./scrollspy/scrollspy').then(m => m.Scrollspy),
      },
      {
        path: 'navbars',
        title: 'Vyzor - Navbars',
        loadComponent: () => import('./navbar/navbar').then(m => m.Navbar),
      },
      {
        path: 'offcanvas',
        title: 'Vyzor - Offcanvas',
        loadComponent: () => import('./offcanvas/offcanvas').then(m => m.Offcanvas),
      },
      {
        path: 'placeholders',
        title: 'Vyzor - Placeholders',
        loadComponent: () => import('./placeholders/placeholders').then(m => m.Placeholders),
      },
      {
        path: 'swiperjs',
        title: 'Vyzor - Swiper JS',
        loadComponent: () => import('./swiperjs/swiperjs').then(m => m.Swiperjs),
      },
      {
        path: 'tour',
        title: 'Vyzor - Tour',
        loadComponent: () => import('./tour/tour').then(m => m.Tour),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdvancedRoutingModule {
  static routes=routes
}
