import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = this.authService.getToken();

        if (!isAuth)
            this.router.navigate(['/home']);
        // this.authService.getIsAuth().subscribe(
        //     (auth) => {
        //         if (!auth)
        //             this.router.navigate(['/home']);
        //     }
        // );
        return true;
    }
};
