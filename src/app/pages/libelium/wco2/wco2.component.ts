import { Component } from '@angular/core';
import { LibeliumFirebaseService } from '../../../@core/data/libelium-firebase.service';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ngx-wco2',
  template: `<ngx-base [temperatura24]="temp24"
                       [humedad24]="hum24"
                       [presion24]="pres24"
                       [co224]="co224"
                       [parametros]="parametros"
                       [deviceMac]="deviceMac"
                       *ngIf="infoDevice">
            </ngx-base>`,
})
export class Wco2Component {

  private deviceMac = '00:13:A2:00:41:5B:67:EB';
  private infoDevice = {};

  public time = [];
  public temp24 = [];
  public hum24 = [];
  public pres24 = [];
  public co224 = [];
  public bat24 = [];
  public parametros = [];

  constructor(private _libeliumFirebase: LibeliumFirebaseService) {
    this._libeliumFirebase.getInfoDevice(this.deviceMac).subscribe((data: any) => {
      this.infoDevice = data;
      this.parametros = data.params.slice(1);
    });

    this._libeliumFirebase.getData50(this.deviceMac).subscribe((data: any[]) => {
      for (let i = 0; i < data.length ; i++) {
        this.time.push(formatDate(data[i].timestamp, 'dd/MM - HH:mm', 'en', 'UTC-3'));
        this.bat24.push(parseFloat(data[i].values.BAT));
        this.temp24.push(parseFloat(data[i].values.TC));
        this.hum24.push(parseFloat(data[i].values.HUM));
        this.pres24.push(parseFloat(data[i].values.PRES) / 100.0);
        this.co224.push(parseFloat(data[i].values.CO2));
      }
    });
  }

}
