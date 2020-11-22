import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkOrdersRoutingModule} from './work-orders-routing.module';
import {ListComponent} from './components/list/list.component';
import {ListViewComponent} from './views/list-view/list-view.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ListComponent, ListViewComponent],
  imports: [
    CommonModule,
    WorkOrdersRoutingModule,
    NgbPaginationModule
  ]
})
export class WorkOrdersModule { }
