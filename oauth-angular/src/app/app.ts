import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleApiService } from './services/google-api/google-api.service';
import { UserKeycloakService } from './services/keycloak/keycloak-user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('oauth-angular');
  private _googleApiService = inject(GoogleApiService);
  private _keycloakService = inject(UserKeycloakService);

  ngOnInit(): void {

    // GOOGLE OIDC
    this._googleApiService.validateLoggedUser();

    // KEYCLOAK
    this._keycloakService.validateLoggedUser();

  }
}
