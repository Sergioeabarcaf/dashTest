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
            </ngx-base> {{ items | async | json }}`,
})
export class Wco2Component implements OnInit {

  private deviceMac = '00:13:A2:00:41:5B:67:EB';
  public items: Observable<any>;

  constructor(private _libeliumFirebase: LibeliumFirebaseService) {
    this.items = this._libeliumFirebase.getData(this.deviceMac);
  }

  ngOnInit() {
  }

}
