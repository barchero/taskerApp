import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListViewComponent} from '@ui/app/admin/modules/work-orders/views/list-view/list-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrdersRoutingModule { }
