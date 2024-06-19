import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class KeycloakOperationService {

  constructor(private readonly keycloak: KeycloakService) { }

  isLogged(): boolean {
    return this.keycloak.isLoggedIn();
  }

  logout(httpLocalhost4200: string): void {
    this.keycloak.logout();
  }

  getUserProfile(): any {
    return this.keycloak.loadUserProfile();
  }

}
