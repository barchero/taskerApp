import {RolesEnum} from '@domain/auth/enums/RolesEnum';

export class AuthUser {
    id: string = '';
    username: string = '';
    firstName: string = '';
    lastName: string = '';
    displayName?: string;
    email: string = '';
    roles: RolesEnum[] = [RolesEnum.USER];
    updated: Date;
    created: Date = new Date(Date.now());
}
