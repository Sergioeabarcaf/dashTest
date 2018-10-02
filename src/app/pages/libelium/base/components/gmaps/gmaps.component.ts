import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-body>
        <agm-map [latitude]="lat" [longitude]="lon" [minZoom]="min" [maxZoom]="max">
          <agm-marker [latitude]="lat" [longitude]="lon"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent{

  @Input() lat;
  @Input() lon;
  max = 19;
  min = 17;

  constructor() {}

}
