import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/echart';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkEcharts } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-echarts/spk-echarts';


@Component({
    selector: 'app-echarts',
    templateUrl: './echarts.html',
    styleUrls: ['./echarts.scss'],
    imports: [SharedModule, SpkEcharts, NgxEchartsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Echarts implements OnInit {
  //
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  public smoothlinechart = chartData.smoothlinechart;
  public basicAreaChart = chartData.basicAreaChart;
  public stackedlineChart = chartData.stackedlineChart;
  public stackedAreaChart = chartData.stackedAreaChart;
  public steplineChart = chartData.steplineChart;
  public basicBarChart = chartData.basicBarChart;
  public barBgChart = chartData.barBgChart;
  public singleBarChart = chartData.singleBarChart;
  public waterFallChart = chartData.waterFallChart;
  public barChartNegativeChart = chartData.barChartNegativeChart;
  public barLableChart = chartData.barLableChart;
  public horizontalBarChart = chartData.horizontalBarChart;
  public horizontalStackedBarChart = chartData.horizontalStackedBarChart;
  public pieChart = chartData.pieChart;
  public doughutChart = chartData.doughutChart;
  public scatterChart = chartData.scatterChart;
  public bubbledChart = chartData.bubbledChart;
  public radarChart = chartData.radarChart;
  public candlestickChart = chartData.candlestickChart;
  public treemapChart = chartData.treemapChart;
  public funnelChart = chartData.funnelChart;
  public guageChart = chartData.guageChart;
  public graphChart = chartData.graphChart;
  public BarChart = chartData.BarChart;

  options!: EChartsOption;

  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }
}
