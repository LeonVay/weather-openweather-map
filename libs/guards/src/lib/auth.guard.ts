import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@libs/api-services';
import { catchError, map, Observable, of, tap } from "rxjs";
import { UserDto } from "@libs/models";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn) return true;

        return this.authService.checkUserSession(state.url)
          .pipe(
            tap(this.passUser),
            map((user) => true),
            tap(() => this.redirect(state.url)),
            catchError(() => of(false))
          );
    }

    passUser = (user: UserDto) => {
      if(user?.updatePass) {
        this.router.navigate(['login']);
      }
    }

    redirect = (url: string) => this.router.navigateByUrl(url)
      .catch(() => this.router.navigate(['/content/list']));
}
