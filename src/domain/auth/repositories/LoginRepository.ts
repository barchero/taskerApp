import {AuthUser} from '@domain/auth/entities/AuthUser';
import {LogInUser} from '@domain/auth/entities/LogInUser';

export abstract class LoginRepository {
    abstract async logIn(loginData: LogInUser): Promise<{access_token: string}>;
    abstract async getLoggedUser(): Promise<AuthUser>;
}
