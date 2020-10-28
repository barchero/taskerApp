import {GetLoggedUser} from '@domain/auth/use-cases/getLoggedUser';
import {AuthUser} from '@domain/auth/entities/AuthUser';
import {LoginRepository} from '@domain/auth/repositories/LoginRepository';


export class GetLoggedUserImpl implements GetLoggedUser {
    constructor(private loginRepository: LoginRepository) {
    }

    async execute(): Promise<AuthUser> {
        return await this.loginRepository.getLoggedUser();
    }

}
