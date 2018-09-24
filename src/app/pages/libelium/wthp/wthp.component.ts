import { Component, OnInit } from '@angular/core';
import { LibeliumFirebaseService } from '../../../@core/data/libelium-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-wthp',
  template: `<ngx-base></ngx-base> {{ items | async | json }}`,
})
export class WthpComponent implements OnInit {

  private deviceMac = '00:13:A2:00:41:04:37:F1';
  public items: Observable<any>;

  constructor(private _libeliumFirebase: LibeliumFirebaseService) {
    this.items = this._libeliumFirebase.getData(this.deviceMac);
  }

  ngOnInit() {}

}
