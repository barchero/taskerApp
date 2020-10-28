import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

// *******************************************************************************
// Layouts
import {Layout1Component} from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages
import {HomeComponent} from './home/home.component';
import {Page2Component} from './page-2/page-2.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: Layout1Component, pathMatch: 'full', children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'page-2', component: Layout1Component, children: [
    { path: '', component: Page2Component },
  ]},

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
