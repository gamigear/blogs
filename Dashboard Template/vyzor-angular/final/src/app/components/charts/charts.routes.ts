import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'charts',
    children: [
      {
        path: 'apexcharts/linecharts',
        title: 'Vyzor - Line Chart',
        loadComponent: () => import('./apexcharts/linecharts/linecharts').then(m => m.Linecharts),
      },
      {
        path: 'apexcharts/areacharts',
        title: 'Vyzor - Area Chart',
        loadComponent: () => import('./apexcharts/areacharts/areacharts').then(m => m.Areacharts),
      },
      {
        path: 'apexcharts/columncharts',
        title: 'Vyzor - Column Chart',
        loadComponent: () => import('./apexcharts/columncharts/columncharts').then(m => m.Columncharts),
      },
      {
        path: 'apexcharts/barcharts',
        title: 'Vyzor - Bar Chart',
        loadComponent: () => import('./apexcharts/barcharts/barcharts').then(m => m.BarchartsComponent)
      },
      {
        path: 'apexcharts/mixedcharts',
        title: 'Vyzor - Mixed Chart',
        loadComponent: () => import('./apexcharts/mixedcharts/mixedcharts').then(m => m.Mixedcharts),
      },
      {
        path: 'apexcharts/rangeareacharts',
        title: 'Vyzor - Range Area Charts',
        loadComponent: () => import('./apexcharts/rangeareacharts/rangeareacharts').then(m => m.Rangeareacharts),
      },
      {
        path: 'apexcharts/timelinecharts',
        title: 'Vyzor - Timeline Charts',
        loadComponent: () => import('./apexcharts/timelinecharts/timelinecharts').then(m => m.Timelinecharts),
      },
      {
        path: 'apexcharts/candlestickcharts',
        title: 'Vyzor - CandleStick Charts',
        loadComponent: () => import('./apexcharts/candlestickcharts/candlestickcharts').then(m => m.Candlestickcharts),
      },
      {
        path: 'apexcharts/boxplotcharts',
        title: 'Vyzor - Boxplot Chart',
        loadComponent: () => import('./apexcharts/boxplotcharts/boxplotcharts').then(m => m.Boxplotcharts),
      },
      {
        path: 'apexcharts/bubblecharts',
        title: 'Vyzor - Bubble Chart',
        loadComponent: () => import('./apexcharts/bubblecharts/bubblecharts').then(m => m.Bubblecharts),
      },
      {
        path: 'apexcharts/scattercharts',
        title: 'Scatter - Scatter Chart',
        loadComponent: () => import('./apexcharts/scattercharts/scattercharts').then(m => m.Scattercharts),
      },
      {
        path: 'apexcharts/heatmapcharts',
        title: 'Vyzor - Heatmap Chart',
        loadComponent: () => import('./apexcharts/heatmapcharts/heatmapcharts').then(m => m.Heatmapcharts),
      },
      {
        path: 'apexcharts/treemapcharts',
        title: 'Vyzor - Treemap Chart',
        loadComponent: () => import('./apexcharts/treemapcharts/treemapcharts').then(m => m.Treemapcharts),
      },
      {
        path: 'apexcharts/piecharts',
        title: 'Vyzor - Pie Chart',
        loadComponent: () => import('./apexcharts/piecharts/piecharts').then(m => m.Piecharts),
      },
      {
        path: 'apexcharts/radialbarcharts',
        title: 'Vyzor - Radialbar Chart',
        loadComponent: () => import('./apexcharts/radialbarcharts/radialbarcharts').then(m => m.Radialbarcharts),
      },
      {
        path: 'apexcharts/radarcharts',
        title: 'Vyzor - Radar Chart',
        loadComponent: () => import('./apexcharts/radarcharts/radarcharts').then(m => m.Radarcharts),
      },
      {
        path: 'apexcharts/polarareacharts',
        title: 'Vyzor - Polararea Chart',
        loadComponent: () => import('./apexcharts/polarareacharts/polarareacharts').then(m => m.Polarareacharts),
      },
      {
        path: 'chartjs',
        title: 'Vyzor - Chartjs',
        loadComponent: () => import('./chartjs/chartjs').then(m => m.Chartjs),
      },
      {
        path: 'echarts',
        title: 'Vyzor - Echarts',
        loadComponent: () => import('./echarts/echarts').then(m => m.Echarts),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {
  static routes=routes
}
