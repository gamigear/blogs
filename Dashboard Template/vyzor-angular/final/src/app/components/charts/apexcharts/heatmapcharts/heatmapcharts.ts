import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-heatmapcharts',
    standalone:true,
    templateUrl: './heatmapcharts.html',
    styleUrls: ['./heatmapcharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Heatmapcharts {
  public HeatmapChartData: any = chartData.HeatmapChartData;
  public MultiSeriesChartData: any = chartData.MultiSeriesChartData;
  public ColorRangeHeatmapChartData: any = chartData.ColorRangeHeatmapChartData;
  public HeatmapShadesChartData: any = chartData.HeatmapShadesChartData;
}
