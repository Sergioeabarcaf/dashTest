import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  // Temperatura Gauge
  tempValue = 25.5;
  tempTitle = 'Temperatura';
  tempMax = 50;
  tempMin = -10;
  tempUm = 'Celsius';

  // Humedad Gauge
  humValue = 48;
  humTitle = 'Humedad';
  humMax = 100;
  humMin = 0;
  humUm = '%HR';

  // Presion Gauge
  presValue = 953;
  presTitle = 'Presion';
  presMax = 1250;
  presMin = 850;
  presUm = 'hPa';

  // CO2 Gauge
  co2Value = 750;
  co2Title = 'CO2';
  co2Max = 0;
  co2Min = 2500;
  co2Um = 'PPM';

  // graficos
  parametros = ['Temperatura', 'Humedad', 'Presión', 'CO2'];
  time = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

  // echartsLine
  datoSensoresLine = [
    {
      name: 'Temperatura',
      type: 'line',
      data: [23.5, 23.6, 24.2, 25.0, 25.5, 26.7, 26.8, 26.8, 29.3, 26.5, 25.3],
    },
    {
      name: 'Humedad',
      type: 'line',
      data: [80.7, 76.9, 75.5, 74.9, 74.2, 72.2, 71.1, 65.6, 62.3, 56.5, 50.3],
    },
    {
      name: 'Presión',
      type: 'line',
      data: [953, 952, 953, 951, 953, 952, 953, 951, 953, 952, 953],
    },
    {
      name: 'CO2',
      type: 'line',
      data: [750, 960, 782, 1800, 2000, 2300, 1500, 1700, 1600, 1000, 700],
    }];

  // echartsArea

  datoSensoresArea = [
    {
      name: 'Temperatura',
      type: 'line',
      stack: 'Total amount',
      areaStyle: { normal: { opacity: echarts.areaOpacity } },
      data: [23.5, 23.6, 24.2, 25.0, 25.5, 26.7, 26.8, 26.8, 29.3, 26.5, 25.3],
    },
    {
      name: 'Humedad',
      type: 'line',
      stack: 'Total amount',
      areaStyle: { normal: { opacity: echarts.areaOpacity } },
      data: [80.7, 76.9, 75.5, 74.9, 74.2, 72.2, 71.1, 65.6, 62.3, 56.5, 50.3],
    },
    {
      name: 'Presión',
      type: 'line',
      stack: 'Total amount',
      areaStyle: { normal: { opacity: echarts.areaOpacity } },
      data: [953, 952, 953, 951, 953, 952, 953, 951, 953, 952, 953],
    },
    {
      name: 'CO2',
      type: 'line',
      stack: 'Total amount',
      areaStyle: { normal: { opacity: echarts.areaOpacity } },
      data: [750, 960, 782, 1800, 2000, 2300, 1500, 1700, 1600, 1000, 700],
    }];


  constructor() { }

  ngOnInit() {
  }

}
