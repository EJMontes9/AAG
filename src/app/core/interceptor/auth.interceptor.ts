import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";
import {catchError, throwError} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const oauthService: OAuthService = inject(OAuthService);
    let newReuest = req.clone();

    if (oauthService.hasValidAccessToken()) {
        newReuest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${oauthService.getAccessToken()}`)
        })
    }

    return next(newReuest).pipe(
        catchError((err) => {
            if (err.status === 401) {
                oauthService.logOut();
            }
            throw err;
        })
    );
};
