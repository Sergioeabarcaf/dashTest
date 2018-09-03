import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { LibeliumRoutingModule } from './libelium-routing.module';

import { LibeliumComponent } from './libelium.component';
import { Wco2Component } from './wco2/wco2.component';
import { WthpComponent } from './wthp/wthp.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    ThemeModule,
    LibeliumRoutingModule,
  ],
  declarations: [
    LibeliumComponent,
    Wco2Component,
    WthpComponent,
    BaseComponent,
  ],
  providers: [],
})

export class LibeliumModule { }