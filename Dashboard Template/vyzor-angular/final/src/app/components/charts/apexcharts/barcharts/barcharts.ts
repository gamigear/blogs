import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-barcharts',
    standalone:true,
    templateUrl: './barcharts.html',
    styleUrls: ['./barcharts.scss'],
    imports: [SharedModule, NgApexchartsModule,SpkApexChart]
})
export class BarchartsComponent {
  public BarChartData: any = chartData.BarChartData;
  public GroupedBarChartData: any = chartData.GroupedBarChartData;
  public StackedBarChartData: any = chartData.StackedBarChartData;
  public StackedBarData100: any = chartData.StackedBarData100;
  public barChartNegativeValueData: any = chartData.barChartNegativeValueData;
  public BarChartMarkerData: any = chartData.BarChartMarkerData;
  public ReversedBarChartData: any = chartData.ReversedBarChartData;
  public DataLableChartData: any = chartData.DataLableChartData;
  public PatternedBarChartData: any = chartData.PatternedBarChartData;
  public ImageFillData: any = chartData.ImageFillData;
}
