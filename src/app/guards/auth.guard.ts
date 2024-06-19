import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {KeycloakOperationService} from "../services/auth/keycloak.service";
import {userProfile} from "../interface/user-profile";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
    private _profile : userProfile | undefined;

    constructor(
        protected override readonly router: Router,
        protected readonly keycloak: KeycloakService,
        private readonly keycloakOperationService: KeycloakOperationService
    ) {
        super(router, keycloak);
    }

    public async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        console.log('AuthGuard');
        if (!this.authenticated) {
            await this.keycloak.login(
                {
                    redirectUri: window.location.origin + state.url,

                });
            console.log('Usuario autenticado');
        }
        const requireRoles = route.data['roles'];
        if (!Array.isArray(requireRoles) || requireRoles.length === 0) {
            return true;
        }
        return requireRoles.every((role) => this.roles.includes(role));
    }
}