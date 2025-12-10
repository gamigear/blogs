import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-scattercharts',
    standalone:true,
    templateUrl: './scattercharts.html',
    styleUrls: ['./scattercharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Scattercharts {
  public BasicScatterChartData: any = chartData.BasicScatterChartData;
  public DateTimeScatterChartData: any = chartData.DateTimeScatterChartData;
  public ImageFillChartData: any = chartData.ImageFillChartData;
}
