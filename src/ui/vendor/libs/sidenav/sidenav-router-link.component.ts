import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'sidenav-router-link', // tslint:disable-line
  template: `
<a
  [routerLink]="route"
  [queryParams]="queryParams"
  [fragment]="fragment"
  [queryParamsHandling]="queryParamsHandling"
  [preserveFragment]="preserveFragment"
  [skipLocationChange]="skipLocationChange"
  [replaceUrl]="replaceUrl"
  class="sidenav-link"
  [ngClass]="linkClass">
  <i class="sidenav-icon" *ngIf="icon" [ngClass]="icon"></i>
  <div><ng-content></ng-content></div>
  <div *ngIf="badge" class="ml-auto pl-1"><div class="badge" [ngClass]="badgeClass">{{badge}}</div></div>
</a>
  `
})
export class SidenavRouterLinkComponent {
  @HostBinding('class.sidenav-item') hostClassMain = true;
  @HostBinding('class.d-block') hostClassBlock = true;

  @Input() icon: string;
  @Input() linkClass = '';
  @Input() badge: any = null;
  @Input() badgeClass = '';
  @Input() @HostBinding('class.disabled') disabled = false;
  @Input() @HostBinding('class.active') active = false;

  @Input() route: any[] | string;
  @Input() queryParams: object;
  @Input() fragment: string;
  @Input() queryParamsHandling: any;
  @Input() preserveFragment: boolean;
  @Input() skipLocationChange: boolean;
  @Input() replaceUrl: boolean;
}
