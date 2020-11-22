import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'login', loadChildren: './login/login#LoginModule'},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)},

  // 404 Not Found page
  { path: '**', component: NotFoundComponent }

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
