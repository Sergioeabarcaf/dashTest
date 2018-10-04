import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-body>
        <agm-map [latitude]="lat" [longitude]="lon" [minZoom]="min" [maxZoom]="max">
          <agm-marker [latitude]="lat" [longitude]="lon" [title]="title" [label]="title"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent{

  @Input() lat;
  @Input() lon;
  @Input() title;
  max = 19;
  min = 17;

  constructor() {}

}
