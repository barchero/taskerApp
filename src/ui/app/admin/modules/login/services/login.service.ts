import {Injectable} from '@angular/core';
import {LogInUser} from '@domain/auth/entities/LogInUser';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginRepositoryImpl} from '@infrastructure/httpClient/auth/LoginRepositoryImpl';
import {LoginRepository} from '@domain/auth/repositories/LoginRepository';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginRepository: LoginRepository;

  constructor(private httpClient: HttpClient) {
    this.loginRepository = new LoginRepositoryImpl(httpClient);
  }

  login(data: LogInUser): Observable<{access_token: string}> {
    return from(this.loginRepository.logIn(data))
      .pipe(tap((res) => {
        if (res && res.access_token) {
          sessionStorage.setItem('token', res.access_token);
        }
      }));
  }
}
