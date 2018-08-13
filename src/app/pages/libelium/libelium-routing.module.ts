import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibeliumComponent } from './libelium.component';
import { WthpComponent } from './wthp/wthp.component';
import { Wco2Component } from './wco2/wco2.component';

const libeliumRoutes: Routes = [{
  path: '',
  component: LibeliumComponent,
  children: [
    {
      path: 'wthp',
      component: WthpComponent,
    }, {
      path: 'wco2',
      component: Wco2Component,
    }],
  }];


@NgModule({
  imports: [RouterModule.forChild(libeliumRoutes)],
  exports: [RouterModule],
})
export class LibeliumRoutingModule { }
