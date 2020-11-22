import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '@ui/environments/environment';
import {ErrorHandlerService} from '@ui/app/utils/services/error-handler.service';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private errorHandlerService: ErrorHandlerService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      return event;
    }), catchError((error: HttpErrorResponse) => {
      if (req.url.startsWith(environment.api.url) &&
        // error.error !== APIErrorEnum.JWT_EXPIRED &&
        (!(Number((error.status + '').charAt(0)) === 4 && error.message)
        ))  {
          if (error.status === 0) {
            // this.router.navigate(['login']);
            console.error(`Should navigate to login but it's not yet implemented`);
          } else {
            this.errorHandlerService.throwError(error);
          }

      }
      return throwError(error);
    }));
  }
}
