import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnChanges {
  @Input() parametros = [];
  @Input() deviceMac: String = '';
  @Input() position;
  @Input() nameDevice;
  @Input() last;

  d = new Date();
  l;
  diff = null;

  constructor() { }

  ngOnChanges() {
    this.l = new Date(this.last);
    this.diff = this.d.getTime() - this.l.getTime();
  }

}
