import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';


import {Observable} from 'rxjs';
import {environment} from '@ui/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DomainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('assets') === -1 && req.url.indexOf('://') === -1) {
      req = req.clone({url: environment.api.url + req.url});
    }

    return next.handle(req);
  }
}
