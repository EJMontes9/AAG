import {APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {AuthConfig, OAuthService, provideOAuthClient} from "angular-oauth2-oidc";
import {environment} from "./environments/environments";
import {authInterceptor} from "./core/interceptor/auth.interceptor";

export const authCodeFlowConfig: AuthConfig={
    issuer: environment.KEYCLOAK_ISSUER_URL,
    tokenEndpoint: environment.KEYCLOAK_TOKEN_URL,
    redirectUri: window.location.origin,
    clientId: environment.KEYCLOAK_CLIENT_ID,
    responseType: 'code',
    scope: 'openid profile',
}

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimations(),
        provideHttpClient(),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideOAuthClient(),
        {
            provide: APP_INITIALIZER,
            useFactory: (oauthService: OAuthService) => {
                return()=>{
                    initializeOAuth(oauthService);
                };
            },
            multi: true,
            deps: [OAuthService]
        }
    ]
};

function initializeOAuth(oauthService: OAuthService):Promise<void> {
    return new Promise((resolve)=>{
        oauthService.configure(authCodeFlowConfig);
        oauthService.setupAutomaticSilentRefresh();
        oauthService.loadDiscoveryDocumentAndLogin()
            .then(()=>{
                if (!oauthService.hasValidAccessToken()){
                    oauthService.initImplicitFlow();
                }
                resolve();
            });
    });
}
