import {LogInUser} from '../entities/LogInUser';

export abstract class Login {
    abstract async execute(loginData: LogInUser): Promise<{access_token: string}>;
}
