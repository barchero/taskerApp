import {LogInUser} from '../entities/LogInUser';

export abstract class Login {
    abstract async execute(loginData: LogInUser): Promise<{token: string}>;
}
