import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { UserGoogleOidc } from '../../interfaces/google-oidc/user-google-oidc';
import { UserGoogleService } from './user-google.service';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '395260445794-8jj86ngtvfp96m57qhj95jiklp74se06.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(
    public oAuthService: OAuthService,
    private _userService: UserGoogleService
  ) {
    oAuthService.configure(oAuthConfig);
  }

  login() {
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.isLoggedIn()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.configureLoggedUser();
        }
      })
    })
  }

  validateLoggedUser() {
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (this.isLoggedIn()) {
          this.configureLoggedUser();
        }
      })
    })
  }

  configureLoggedUser() {
    this.oAuthService.loadUserProfile().then((userProfile: any) => {
      this._userService.setUserInfo(userProfile.info as UserGoogleOidc)
    })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  logout() {
    this.oAuthService.logOut();
  }
}
