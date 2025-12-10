import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-linecharts',
    standalone:true,
    templateUrl: './linecharts.html',
    styleUrls: ['./linecharts.scss'],
    imports: [SharedModule, NgApexchartsModule,SpkApexChart]
})
export class Linecharts {
  public BasicLineData: any = chartData.BasicLineChartData;
  public DataLableLinechartData: any = chartData.DataLableLineChartData;
  public LineAnnotationData: any = chartData.LineAnnotationsData;
  public BrushChartsData1: any = chartData.BrushChartData1;
  public BrushChartsData2: any = chartData.BrushChartData2;
  public StepLineChartData: any = chartData.StepLineData;
  public GradientLineCahrtData: any = chartData.GradientLineData;
  public MissingNullChartData: any = chartData.MissingNullChartData;
  public DasheLineChartData: any = chartData.DasheLineChartData;
  public SyncingChartData1: any = chartData.SyncingChartData1;
  public SyncingChartData2: any = chartData.SyncingChartData2;
  public SyncingChartData3: any = chartData.SyncingChartData3;
  public ReatTimeChartData: any = chartData.ReatTimeChartData;
  public ZoomableChartData: any = chartData.ZoomableChartData;

  public generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { max: number; min: number }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  constructor() {}
}
