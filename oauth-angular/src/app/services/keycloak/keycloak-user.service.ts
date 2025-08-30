import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserKeycloak } from '../../interfaces/keycloak/user-keycloak';
import Keycloak from 'keycloak-js';


@Injectable({
    providedIn: 'root'
})
export class UserKeycloakService {
    private _userInfo = new BehaviorSubject<UserKeycloak>(null);
    private _keycloak = inject(Keycloak);

    validateLoggedUser() {
        this._keycloak.loadUserInfo().then(result => {
            this.setUserInfo(result);
        })
    }

    logout() {
        this._keycloak.logout();
    }

    setUserInfo(userInfo: UserKeycloak) {
        this._userInfo.next(userInfo);
    }

    get userInfo(): UserKeycloak {
        return this._userInfo.getValue();
    }

}
