import { Component, inject } from '@angular/core';
import { GoogleApiService } from '../../services/google-api/google-api.service';
import { UserGoogleOidc } from '../../interfaces/google-oidc/user-google-oidc';
import { UserGoogleService } from '../../services/google-api/user-google.service';

@Component({
  selector: 'app-google-oidc',
  templateUrl: './google-oidc.component.html',
  styleUrl: './google-oidc.component.scss'
})
export class GoogleOidcComponent {

  private _googleApiService = inject(GoogleApiService);
  private _userService = inject(UserGoogleService);

  login() {
    this._googleApiService.login();
  }

  logout() {
    this._googleApiService.logout();
  }

  get isLogged(): boolean {
    return this._googleApiService.isLoggedIn();
  }

  get userInfo(): UserGoogleOidc {
    return this._userService.userInfo;
  }
}
