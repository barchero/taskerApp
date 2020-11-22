import {LoginRepository} from '@domain/auth/repositories/LoginRepository';
import {LogInUser} from '@domain/auth/entities/LogInUser';
import {AuthUser} from '@domain/auth/entities/AuthUser';
import {HttpClient} from '@angular/common/http';

export class LoginRepositoryImpl implements LoginRepository {
  constructor(private httpClient: HttpClient) { }

  async logIn(loginData: LogInUser): Promise<{ access_token: string }> {
    return await this.httpClient.post<{access_token: string}>('/auth/login', loginData).toPromise();
  }

  async getLoggedUser(): Promise<AuthUser> {
    return await this.httpClient.get<AuthUser>('/auth/profile').toPromise();
  }
}
