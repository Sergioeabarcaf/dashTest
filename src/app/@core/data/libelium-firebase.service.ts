import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class LibeliumFirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getData50(deviceMac) {
    return this.db.list(`dataDevices/${ deviceMac }`, ref => ref.limitToLast(48)).valueChanges();
  }

  getInfoDevice(deviceMAC) {
    return this.db.object(`devices/${ deviceMAC }`).valueChanges();
  }
}
