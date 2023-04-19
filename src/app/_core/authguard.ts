import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     *
     */
    constructor(private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let canLogin = localStorage.getItem("canLogin");

        if (canLogin === "true") {

            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }

}