import { Component, OnDestroy, Input, OnChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LibeliumFirebaseService } from '../../../../../@core/data/libelium-firebase.service'

@Component({
  selector: 'ngx-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnDestroy, OnChanges {

  colors: any;
  themeSubscription: any;
  gaugeValue = null;
  min = 0;
  max = 100;
  umParam = 'UM';
  @Input() titleParam = 'Gauge';
  @Input() device;

  constructor(private theme: NbThemeService, private _libeliumFirebase: LibeliumFirebaseService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnChanges() {
    this._libeliumFirebase.getLastData(this.device).subscribe((data: any[]) => {
      this.umParam = this.getUM(this.titleParam);
      this.gaugeValue = this.getParamValue(this.titleParam, data[0].values);
    });
  }

  getParamValue(parametro: String, data: any) {
    switch (parametro) {
      case 'Temperatura':
        return parseFloat(data.TC) ;
      case 'Humedad' :
        return parseFloat(data.HUM);
      case 'Presión':
        return parseFloat(data.PRES) / 100.0;
      case 'CO2':
        return parseFloat(data.CO2);
      default:
        return -1;
    }
  }

  getUM(parametro: String) {
    switch (parametro) {
      case 'Temperatura':
        this.min = -20;
        this.max = 50;
        return '°C';
      case 'Humedad' :
        this.min = 0;
        this.max = 100;
        return '%';
      case 'Presión':
        this.min = 700;
        this.max = 1050;
        return 'hPa';
      case 'CO2':
        this.min = 100;
        this.max = 1500;
        return 'PPM';
      default:
        return 'UM';
    }
  }
}
