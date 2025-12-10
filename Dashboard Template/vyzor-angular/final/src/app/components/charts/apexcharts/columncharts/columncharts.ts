import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { colors, arrayData } from "./data-series";
import {  ApexOptions } from 'ng-apexcharts';
import { ChartComponent } from 'ng-apexcharts';

@Component({
    selector: 'app-columncharts',
    standalone:true,
    templateUrl: './columncharts.html',
    styleUrls: ['./columncharts.scss'],
    imports: [SharedModule, SpkApexChart]
})
export class Columncharts {
  public BasicColumnChartData: any = chartData.BasicColumnChartData;
  public DataLableColumnChartdata: any = chartData.DataLableColumnChartdata;
  public StackedChartData: any = chartData.StackedChartData;
  public stackedData100: any = chartData.stackedData100;
  public ColumnChartdata: any = chartData.ColumnChartdata;
  public RotatedLevelChartData: any = chartData.RotatedLevelChartData;
  public NegativeChartdata: any = chartData.NegativeChartdata;
  public RangeColumnChartData: any = chartData.RangeColumnChartData;
  public DistributedChartData: any = chartData.DistributedChartData;
  public DynamicChartData1: any = chartData.DynamicChartData1;
  public DynamicChartData2: any = chartData.DynamicChartData2;

  @ViewChild("chart") chart!: ChartComponent;
  @ViewChild('quarterChart', { static: false }) quarterChartEl!: ElementRef;
  @ViewChild('yearChart', { static: false }) yearChartEl!: ElementRef;

  public chartOptions!: ApexOptions;
  public optionsQuarter!: ApexOptions;

  constructor() {
    this.initializeChartOptions();
    this.initializeQuarterOptions();
  }

  ngAfterViewInit() {
    this.updateQuarterChart({
      w: {
        globals: { selectedDataPoints: [] },
        config: { series: [] }
      }
    }, 'barQuarter');
  }

  private initializeChartOptions() {
    this.chartOptions = {
      series: [{
        data: this.makeData()
      }],
      chart: {
        id: 'barYear',
        height: 320,
        width: '100%',
        type: 'bar',
        events: {
          dataPointSelection: (e: any, chart: any, opts: any) => {
            let quarterChartEl: any = document.querySelector('#chart-quarter');
            let yearChartEl: any = document.querySelector('#chart-year');

            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl.classList.contains('active')) {
                this.updateQuarterChart(chart, 'barQuarter');
              } else {
                yearChartEl.classList.add('chart-quarter-activated');
                quarterChartEl.classList.add('active');
                this.updateQuarterChart(chart, 'barQuarter');
              }
            } else {
              this.updateQuarterChart(chart, 'barQuarter');
            }

            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl.classList.remove('chart-quarter-activated');
              quarterChartEl.classList.remove('active');
            }
          },
          updated: (chart: any) => {
            this.updateQuarterChart(chart, 'barQuarter');
          },
        }
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: '50%',
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: (_val: any, opt: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) => {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      grid: {
        borderColor: '#f2f5f7'
      },
      colors: colors,
      states: {
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: 'darken'
          }
        }
      },
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: (_val: any, opts: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) => {
              return opts.w.globals.labels[opts.dataPointIndex];
            }
          }
        }
      },
      title: {
        text: 'Yearly Results',
        offsetX: 15,
        align: 'left',
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
        }
      },
      subtitle: {
        text: '(Click on bar to see details)',
        offsetX: 15
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: '#8c9097',
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label'
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    };
  }

  private initializeQuarterOptions() {
    this.optionsQuarter = {
      series: [
        {
          name: 'quarter',
          data: [],
        },
      ],
      chart: {
        id: 'barQuarter',
        height: 320,
        width: '100%',
        type: 'bar',
        stacked: true,
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          horizontal: false,
        },
      },
      legend: {
        show: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Quarterly Results',
        offsetX: 10,
      },
      tooltip: {
        x: {
          formatter: function (
            val: any,
            opts: {
              w: { globals: { seriesNames: { [x: string]: any } } };
              seriesIndex: string | number;
            }
          ) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          },
        },
        y: {
          title: {
            formatter: function (
              val: any,
              opts: {
                w: { globals: { labels: { [x: string]: any } } };
                dataPointIndex: string | number;
              }
            ) {
              return opts.w.globals.labels[opts.dataPointIndex];
            },
          },
        },
      },
    };
  }
  makeData(): any {
    let dataSet = this.shuffleArray(arrayData);

    let dataYearSeries = [
      {
        x: '2011',
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters,
      },
      {
        x: '2012',
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters,
      },
      {
        x: '2013',
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters,
      },
      {
        x: '2014',
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters,
      },
      {
        x: '2015',
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters,
      },
      {
        x: '2016',
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters,
      },
    ];

    return dataYearSeries;
  }
  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  updateQuarterChart(
    sourceChart: {
      w: { globals: { selectedDataPoints: any[] }; config: { series: any[] } };
    },
    destChartIDToUpdate: any
  ) {
    let series = [];
    let seriesIndex = 0;
    let colors = [];

    if (sourceChart.w.globals.selectedDataPoints[0]) {
      let selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (let i = 0; i < selectedPoints[seriesIndex].length; i++) {
        let selectedIndex = selectedPoints[seriesIndex][i];
        let yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters,
        });
        colors.push(yearSeries.data[selectedIndex].color);
      }

      if (series.length === 0)
        series = [
          {
            data: [],
          },
        ];

      return window.ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
        series: series,
        colors: colors,
        fill: {
          colors: colors,
        },
      });
    }
  }
}
