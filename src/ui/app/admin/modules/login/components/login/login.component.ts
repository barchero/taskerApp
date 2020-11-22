import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {environment} from '@ui/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() form: FormGroup;
  @Output() loginAction = new EventEmitter<void>();
  environment = environment;

  constructor() { }

  login() {
    this.loginAction.emit();
  }

}
