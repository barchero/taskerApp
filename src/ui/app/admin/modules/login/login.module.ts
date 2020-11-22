import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components/login/login.component';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LoginViewComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
