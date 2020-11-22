/* "Barrel" of Http Interceptors */
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DomainInterceptor} from '@ui/app/utils/interceptors/domain.interceptor';
import {AuthInterceptor} from '@ui/app/utils/interceptors/auth.interceptor';


/** Http interceptor providers in outside-in order */

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  // {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true},
  // {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}
];
