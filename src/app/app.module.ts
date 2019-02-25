import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CurrentComponent } from './components/current/current.component';
import { History24HoursComponent } from './components/history24-hours/history24-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CurrentComponent,
    History24HoursComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
