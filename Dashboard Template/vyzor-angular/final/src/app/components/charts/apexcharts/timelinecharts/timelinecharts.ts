import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-timelinecharts',
    standalone:true,
    templateUrl: './timelinecharts.html',
    styleUrls: ['./timelinecharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Timelinecharts {
  public BasicTimeLineChartData: any = chartData.BasicTimeLineChartData;
  public multipleColoredTImelineChartData: any =
    chartData.multipleColoredTImelineChartData;
  public multipleSeriesTImelineChartData: any =
    chartData.multipleSeriesTImelineChartData;
  public AdvancedChartDAta: any = chartData.AdvancedChartDAta;
  public GroupRowChartData: any = chartData.GroupRowChartData;
}
