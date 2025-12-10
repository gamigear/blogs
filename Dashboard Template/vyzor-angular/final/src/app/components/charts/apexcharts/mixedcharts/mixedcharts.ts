import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-mixedcharts',
    standalone:true,
    templateUrl: './mixedcharts.html',
    styleUrls: ['./mixedcharts.scss'],
    imports: [SharedModule, NgApexchartsModule,SpkApexChart]
})
export class Mixedcharts {
  public MixedColumnChartData: any = chartData.MixedColumnChartData;
  public MultipleAxixChartData: any = chartData.MultipleAxixChartData;
  public LineAreaChartData: any = chartData.LineAreaChartData;
  public LineColumnAreaChartData: any = chartData.LineColumnAreaChartData;

  public generateData(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  public generateData1(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
