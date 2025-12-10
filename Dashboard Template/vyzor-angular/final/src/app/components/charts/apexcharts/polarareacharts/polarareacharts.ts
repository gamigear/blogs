import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
@Component({
    selector: 'app-polarareacharts',
    standalone:true,
    templateUrl: './polarareacharts.html',
    styleUrls: ['./polarareacharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Polarareacharts {
  public PolarAreaChartData: any = chartData.PolarAreaChartData;
  public PolarAreaMonochromeChart: any = chartData.PolarAreaMonochromeChart;
}
