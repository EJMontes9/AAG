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

  logout(): void {
    this.keycloak.logout();
  }

  getUserProfile(): any {
    return this.keycloak.loadUserProfile();
  }

  clearToken(): void {
    this.keycloak.clearToken();
  }

}
