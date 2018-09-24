import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class LibeliumFirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getData(deviceMac) {
    return this.db.object(`dataDevices/${ deviceMac }`).valueChanges();
  }
}
