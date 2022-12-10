import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = this.authService.getToken();
        const isTokenExpired = this.authService.isTokenExpired();

        if (!isAuth || isTokenExpired)
            this.router.navigate(['/home']);
        return true;
    }
};
