import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-boxplotcharts',
    standalone:true,
    templateUrl: './boxplotcharts.html',
    styleUrls: ['./boxplotcharts.scss'],
    imports: [SharedModule,SpkApexChart]
})
export class Boxplotcharts {
  public BoxPlotChartData: any = chartData.BoxPlotChartData;
  public ScatterChartData: any = chartData.ScatterChartData;
  public HorizontalBoxplotChartData: any = chartData.HorizontalBoxplotChartData;
}
