import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  position: any;
  name: string;
  load = true;

  constructor(public firebase: FirebaseService) {
    this.firebase.getInfoDevice('00:13:A2:00:41:5B:67:EB').subscribe( (data: any) => {
      this.position = data.position;
      this.name = data.name;
      this.load = false;
    });

  }

  ngOnInit() {
  }

}
