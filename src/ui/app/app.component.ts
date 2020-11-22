import {Component} from '@angular/core';
import {Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AppService} from './app.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '@ui/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { display: block; }']
})
export class AppComponent {
  constructor(
    private router: Router,
    private appService: AppService,
    private translate: TranslateService
  ) {
    // Subscribe to router events to handle page transition
    this.router.events.subscribe(this.navigationInterceptor.bind(this));

    // Disable animations and transitions in IE10 to increase performance
    if (typeof (document as any).documentMode === 'number' && (document as any).documentMode < 11) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          -ms-animation: none !important;
          animation: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`;
      document.head.appendChild(style);
    }

    // ngx-translate initial config
    translate.addLangs(environment.i18n.availableLangs);
    translate.setDefaultLang(environment.i18n.defaultLang);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match('/' + environment.i18n.availableLangs.join('|') + '/') ? browserLang : environment.i18n.defaultLang);
  }

  private navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      // Set loading state
      document.body.classList.add('app-loading');
    }

    if (e instanceof NavigationEnd) {
      // Scroll to top of the page
      this.appService.scrollTop(0, 0);
    }

    if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
      // On small screens collapse sidenav
      // if (this.layoutService.isSmallScreen() && !this.layoutService.isCollapsed()) {
      //   setTimeout(() => this.layoutService.setCollapsed(true, true), 10);
      // }

      // Remove loading state
      document.body.classList.remove('app-loading');
    }
  }
}
