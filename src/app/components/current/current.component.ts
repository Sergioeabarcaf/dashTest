import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  last: any;
  load = true;
  timeDifference: any;
  timeCurrent = new Date();

  constructor(public firebase: FirebaseService) {
    this.firebase.getData24Hours('00:13:A2:00:41:5B:67:EB').subscribe( (data: any[]) => {
      // Se valida que el largo de los datos recibidos sea 48.
      if (data.length === 48) {
        this.last = data[47];
        // transformar de string a number
        this.last.values.TC = parseFloat(data[47].values.TC);
        this.last.values.HUM = parseFloat(data[47].values.HUM);
        this.last.values.PRES = parseFloat(data[47].values.PRES);
        this.last.values.CO2 = parseFloat(data[47].values.CO2);
        this.last.values.BAT = parseFloat(data[47].values.BAT);
        // transformar de string a Date.
        this.last.timestamp = new Date(data[47].timestamp);
        // calcular la diferencia en tiempo
        this.timeDifference = this.timeCurrent.getTime() - this.last.timestamp.getTime();
        // Alertar que termino de obtener datos.
        this.load = false;
        console.log(this.last);
      }
    });
  }

  ngOnInit() {
  }

}
