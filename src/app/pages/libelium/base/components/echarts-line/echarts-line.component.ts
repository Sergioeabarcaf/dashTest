import { AfterViewInit, Component, OnDestroy, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { NbThemeService } from '@nebular/theme';
import { LibeliumFirebaseService } from '../../../../../@core/data/libelium-firebase.service';


@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts *ngIf="dataXaxis.length > 1 && dataLegend.length > 1" [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy, OnInit {

  options: any = {};
  themeSubscription: any;
  libeliumFirebaseSubscription: any;

  public dataXaxis = [];
  public dataSeries = [
    {
      name: '',
      type: 'line',
      data: [],
    },
    {
      name: '',
      type: 'line',
      data: [],
    },
    {
      name: '',
      type: 'line',
      data: [],
    },
    {
      name: '',
      type: 'line',
      data: [],
    }];

  @Input() device: string = '';
  @Input() dataLegend = [];

  constructor(private theme: NbThemeService, private _libeliumFirebase: LibeliumFirebaseService) { }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info, colors.warning],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: this.dataLegend,
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: this.dataXaxis,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: this.dataSeries,
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.libeliumFirebaseSubscription.unsubscribe();
  }

  ngOnInit() {
    for (let i = 0; i < this.dataLegend.length; i += 1) {
      this.dataSeries[i].name = this.dataLegend[i];
    }
    this.libeliumFirebaseSubscription = this._libeliumFirebase.getData50(this.device).subscribe((data: any[]) => {
      for (let i = 0; i < data.length ; i++) {
        this.dataXaxis.push(formatDate(data[i].timestamp, 'dd/MM - HH:mm', 'en', 'UTC-3'));
        this.dataSeries[0].data.push(parseFloat(data[i].values.TC));
        this.dataSeries[1].data.push(parseFloat(data[i].values.HUM));
        this.dataSeries[2].data.push(parseFloat(data[i].values.PRES) / 100.0);
        this.dataSeries[3].data.push(parseFloat(data[i].values.CO2));
      }
    });
  }

}
