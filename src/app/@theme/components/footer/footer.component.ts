import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Desarrollado por Proteinlab - UTEM</span>
    <div class="socials">
      <a href="https://www.facebook.com/proteinlab" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.instagram.com/proteinlabchile" target="_blank" class="ion ion-social-instagram"></a>
      <a href="https://www.youtube.com/channel/UCzail_XmzV92jTMOkAA2zcw" target="_blank" class="ion ion-social-youtube"></a>
    </div>
  `,
})
export class FooterComponent {
}
