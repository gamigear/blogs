import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-piecharts',
    standalone:true,
    templateUrl: './piecharts.html',
    styleUrls: ['./piecharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Piecharts {
  public pieChartData: any = chartData.pieChartData;
  public DonutChartData: any = chartData.DonutChartData;
  public UpdatingDonutChartData: any = chartData.UpdatingDonutChartData;
  public MonochromePieChart: any = chartData.MonochromePieChart;
  public GradientDonutChartData: any = chartData.GradientDonutChartData;
  public DonutPatternChartData: any = chartData.DonutPatternChartData;
  public ImageFillPieChartData: any = chartData.ImageFillPieChartData;
}
