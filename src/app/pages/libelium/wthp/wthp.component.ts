import { Component } from '@angular/core';
import { LibeliumFirebaseService } from '../../../@core/data/libelium-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-wthp',
  template: `<ngx-base [parametros]="parametros"
                       [deviceMac]="deviceMac"
                       [position]="infoDevice.position"
                       [nameDevice]="infoDevice.name"
                       [last]="last"
                       *ngIf="infoDevice">
            </ngx-base>`,
})
export class WthpComponent {

  private deviceMac = '00:13:A2:00:41:04:37:F1';
  public infoDevice = {};
  public parametros = [];
  public last;

  constructor(private _libeliumFirebase: LibeliumFirebaseService) {
    this._libeliumFirebase.getInfoDevice(this.deviceMac).subscribe((data: any) => {
      this.infoDevice = data;
      this.parametros = data.params;
      this.last = data.last;
    });
  }

}
