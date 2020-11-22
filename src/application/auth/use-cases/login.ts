import {Login} from '@domain/auth/use-cases/login';
import {LoginRepository} from '@domain/auth/repositories/LoginRepository';

export class LoginImpl implements Login {

    constructor(
        private loginRepository: LoginRepository
    ) {
    }

    async execute(loginData): Promise<{ access_token: string }> {
        return await this.loginRepository.logIn(loginData);
    }

}
