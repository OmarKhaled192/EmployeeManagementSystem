import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error status', error.status);

        // error handling for status 200
        if (error.status === 200) {
          return next.handle(req);
        }

        // Handle other errors
        switch (error.status) {
          case 404:
            this.router.navigate(['/error/404']);
            break;
          case 500:
            this.router.navigate(['/error/500']);
            break;
          default:
            break;
        }

        return throwError(() => new Error(error.message)); // Propagate other errors
      })
    );
  }
}
