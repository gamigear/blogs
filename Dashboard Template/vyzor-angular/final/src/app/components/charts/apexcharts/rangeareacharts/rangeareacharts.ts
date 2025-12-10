import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-rangeareacharts',
    standalone:true,
    templateUrl: './rangeareacharts.html',
    styleUrls: ['./rangeareacharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Rangeareacharts {
  public RangeAreaChartData: any = chartData.RangeAreaChartData;
  public ComboRangeAreaChartData: any = chartData.ComboRangeAreaChartData;
}
