import { Component, OnInit } from '@angular/core';
import { LibeliumFirebaseService } from '../../../@core/data/libelium-firebase.service';

@Component({
  selector: 'ngx-wthp',
  template: `<ngx-base></ngx-base>`,
})
export class WthpComponent implements OnInit {

  constructor( private _libeliumFirebase: LibeliumFirebaseService ) { }

  ngOnInit() {
  }

}
