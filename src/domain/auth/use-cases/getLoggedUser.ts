import {AuthUser} from '../entities/AuthUser';

export abstract class GetLoggedUser {
    abstract async execute(): Promise<AuthUser>;
}
