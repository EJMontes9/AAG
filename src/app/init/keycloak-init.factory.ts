import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () => keycloak.init({
        config: {
            url: 'http://localhost:9090',
            realm: 'dev',
            clientId: 'spring-client-api',
        },
        initOptions: {
            onLoad: 'login-required',
            silentCheckSsoRedirectUri:
                window.location.origin + '/assets/silent-check-sso.html',
            checkLoginIframe: true,
            checkLoginIframeInterval: 25
        },
        enableBearerInterceptor: true,
        bearerPrefix: 'Bearer',
        bearerExcludedUrls: ['/assets'],
    });
}