import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
    selector: 'app-treemapcharts',
    standalone:true,
    templateUrl: './treemapcharts.html',
    styleUrls: ['./treemapcharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Treemapcharts {
  public TreemapCahrtData: any = chartData.TreemapCahrtData;
  public DimensionalTreemapdata: any = chartData.DimensionalTreemapdata;
  public DistributedTreemapData: any = chartData.DistributedTreemapData;
  public ColorrangeDate: any = chartData.ColorrangeDate;
}
