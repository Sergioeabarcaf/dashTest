import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnChanges {

  @Input() temperatura24: number[] = [10.0];
  @Input() humedad24: number[] = [10.0];
  @Input() presion24: number[] = [1000.0];
  @Input() co224: number[] = [1000.0];
  @Input() parametros = [];

  @Input() deviceMac: String = '';

  // Temperatura Gauge
  tempValue = this.temperatura24[this.temperatura24.length - 1];
  tempTitle = 'Temperatura';
  tempMax = 50;
  tempMin = -10;
  tempUm = 'Celsius';

  // Humedad Gauge
  humValue = this.humedad24[this.humedad24.length - 1];
  humTitle = 'Humedad';
  humMax = 100;
  humMin = 0;
  humUm = '%HR';

  // Presion Gauge
  presValue = this.presion24[this.presion24.length - 1];
  presTitle = 'Presion';
  presMax = 1250;
  presMin = 850;
  presUm = 'hPa';

  // CO2 Gauge
  co2Value = this.co224[this.co224.length - 1];
  co2Title = 'CO2';
  co2Max = 2500;
  co2Min = 0;
  co2Um = 'PPM';


  constructor() {
  }

  ngOnChanges() {
    this.tempValue = this.temperatura24[this.temperatura24.length - 1];
    this.humValue = this.humedad24[this.humedad24.length - 1];
    this.presValue = this.presion24[this.presion24.length - 1];
    this.co2Value = this.co224[this.co224.length - 1];
  }

}
