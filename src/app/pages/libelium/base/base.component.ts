import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-base',
  templateUrl: './base.component.html',
})
export class BaseComponent {
  @Input() parametros = [];
  @Input() deviceMac: String = '';
  @Input() position;

  constructor() {
  }

}
