import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-candlestickcharts',
    standalone:true,
    templateUrl: './candlestickcharts.html',
    styleUrls: ['./candlestickcharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Candlestickcharts {
  public CandlestickChartData: any = chartData.CandlestickChartData;
  public SyncedBrushChartData1: any = chartData.SyncedBrushChartData1;
  public SyncedBrushChartData: any = chartData.SyncedBrushChartData;
  public CandlestickXAxisChartData: any = chartData.CandlestickXAxisChartData;
  public lineChartData: any = chartData.lineChartData;
}
