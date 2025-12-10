import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-radialbarcharts',
    standalone:true,
    templateUrl: './radialbarcharts.html',
    styleUrls: ['./radialbarcharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Radialbarcharts {
  public BasicPieChartData: any = chartData.BasicPieChartData;
  public multipleradialBarChart: any = chartData.multipleradialBarChart;
  public CustomAngleChartData: any = chartData.CustomAngleChartData;
  public GradientCircleChartData: any = chartData.GradientCircleChartData;
  public CircleImageChartData: any = chartData.CircleImageChartData;
  public StrokedCircularGaugeData: any = chartData.StrokedCircularGaugeData;
  public SemiCircularGaugeData: any = chartData.SemiCircularGaugeData;
}
