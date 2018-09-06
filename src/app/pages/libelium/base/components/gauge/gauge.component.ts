import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnDestroy {

  @Input() gaugeValue = 50;
  @Input() min = 0;
  @Input() max = 100;
  @Input() titleParam = 'Gauge';
  @Input() umParam = 'UM';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

}
