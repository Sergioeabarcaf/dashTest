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


  constructor() { }

  ngOnInit() {
  }

}
