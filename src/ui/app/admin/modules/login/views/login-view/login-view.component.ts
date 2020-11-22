import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '@ui/app/admin/modules/login/services/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    this.loginService.login(this.loginForm.getRawValue()).subscribe((res) => {
      if (res) {
        this.router.navigate(['../..', 'work-orders', 'list'], {relativeTo: this.activatedRoute});
      }
    });
  }
}
