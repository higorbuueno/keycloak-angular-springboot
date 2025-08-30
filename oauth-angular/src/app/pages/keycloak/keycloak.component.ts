import { Component, inject, OnInit } from '@angular/core';
import { UserKeycloak } from '../../interfaces/keycloak/user-keycloak';
import Keycloak from 'keycloak-js';
import { UserKeycloakService } from '../../services/keycloak/keycloak-user.service';

@Component({
  selector: 'app-keycloak',
  imports: [],
  templateUrl: './keycloak.component.html',
  styleUrl: './keycloak.component.scss'
})
export class KeycloakComponent {

  private _userKeycloakService = inject(UserKeycloakService);

  logout() {
    this._userKeycloakService.logout();
  }

  get user(): UserKeycloak {
    return this._userKeycloakService.userInfo
  }
}
