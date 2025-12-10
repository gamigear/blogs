import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-bubblecharts',
    standalone:true,
    templateUrl: './bubblecharts.html',
    styleUrls: ['./bubblecharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Bubblecharts {
  public BubbleChartData: any = chartData.BubbleChartData;
  public ThreeDChartData: any = chartData.ThreeDChartData;
}
