import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';


import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token')) {
      const headers = req.headers;
      if (headers) {
        req = req.clone({headers: headers.append('Authorization', `Bearer ${sessionStorage.getItem('token')}`)});
      } else {
        req = req.clone({headers: new HttpHeaders({Authorization: `Bearer ${sessionStorage.getItem('token')}`})});
      }
    }

    return next.handle(req);
  }
}
