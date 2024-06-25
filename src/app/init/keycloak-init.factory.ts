import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () => keycloak.init({
        config: {
            url: 'http://172.16.1.67:9090',
            realm: 'dev',
            clientId: 'angular-client',
        },
        initOptions: {
            onLoad: 'check-sso',
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