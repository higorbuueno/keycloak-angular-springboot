import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserGoogleOidc } from '../../interfaces/google-oidc/user-google-oidc';

@Injectable({
    providedIn: 'root'
})
export class UserGoogleService {
    private _userInfo = new BehaviorSubject<UserGoogleOidc>(null);

    setUserInfo(userInfo: UserGoogleOidc) {
        this._userInfo.next(userInfo);
    }

    get userInfo(): UserGoogleOidc {
        return this._userInfo.getValue();
    }

}
