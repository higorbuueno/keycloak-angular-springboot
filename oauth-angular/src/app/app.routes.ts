import { Routes } from '@angular/router';
import { GoogleOidcComponent } from './pages/google-oidc/google-oidc.component';
import { KeycloakComponent } from './pages/keycloak/keycloak.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'keycloak'
        // redirectTo: 'google-oidc'
    },
    {
        path: 'keycloak',
        component: KeycloakComponent
    },
    {
        path: 'google-oidc',
        component: GoogleOidcComponent
    }
];
