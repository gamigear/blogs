import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-radarcharts',
    standalone:true,
    templateUrl: './radarcharts.html',
    styleUrls: ['./radarcharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Radarcharts {
  public RadarChartdata: any = chartData.RadarChartdata;
  public ChartMultipleSeriesChartData: any =
    chartData.ChartMultipleSeriesChartData;
  public PoygonFillChartData: any = chartData.PoygonFillChartData;
}
