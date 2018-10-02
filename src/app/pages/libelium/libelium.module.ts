import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { LibeliumRoutingModule } from './libelium-routing.module';
import { LibeliumFirebaseService } from '../../@core/data/libelium-firebase.service';
import { LibeliumComponent } from './libelium.component';
import { Wco2Component } from './wco2/wco2.component';
import { WthpComponent } from './wthp/wthp.component';
import { BaseComponent } from './base/base.component';
import { GaugeComponent } from './base/components/gauge/gauge.component';
import { GaugeDraggerComponent } from './base/components/gauge/gauge-dragger/gauge-dragger.component';
import { EchartsLineComponent } from './base/components/echarts-line/echarts-line.component';
import { EchartsAreaComponent } from './base/components/echarts-area/echarts-area.component';
import { GmapsComponent } from './base/components/gmaps/gmaps.component';

@NgModule({
  imports: [
    ThemeModule,
    LibeliumRoutingModule,
    NgxEchartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY3-E9fq2SiQAO5PCwZCXt8PI6nh1AlsI',
      libraries: ['places'],
    }),
  ],
  declarations: [
    LibeliumComponent,
    Wco2Component,
    WthpComponent,
    BaseComponent,
    GaugeComponent,
    GaugeDraggerComponent,
    EchartsLineComponent,
    EchartsAreaComponent,
    GmapsComponent,
  ],
  providers: [LibeliumFirebaseService],
})

export class LibeliumModule { }
