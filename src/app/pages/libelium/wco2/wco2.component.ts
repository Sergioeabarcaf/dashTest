import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-wco2',
  template: `<ngx-base [temperatura24]="temp24"
                       [humedad24]="hum24"
                       [presion24]="pres24"
                       [co224]="co224"
                       [time]="time">
            </ngx-base>`,
})
export class Wco2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
