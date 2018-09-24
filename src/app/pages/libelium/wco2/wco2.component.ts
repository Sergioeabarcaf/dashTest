import { Component, OnInit } from '@angular/core';
import { LibeliumFirebaseService } from '../../../@core/data/libelium-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-wco2',
  template: `<ngx-base [temperatura24]="temp24"
                       [humedad24]="hum24"
                       [presion24]="pres24"
                       [co224]="co224"
                       [time]="time">
            </ngx-base> {{ items | json }}`,
})
export class Wco2Component implements OnInit {

  private deviceMac = '00:13:A2:00:41:5B:67:EB';
  public items: any[];
  public itemsJSON: any;

  public time = [];
  public temp24 = [];
  public hum24 = [];
  public pres24 = [];
  public co224 = [];

  constructor(private _libeliumFirebase: LibeliumFirebaseService) {
    this._libeliumFirebase.getData(this.deviceMac).subscribe((data: any[]) => {
      this.items = data;
    });
  }

  ngOnInit() {
  }

}
