import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, debounceTime, Observable, of, tap } from "rxjs";
import { UserDto } from '@libs/models';
import { getOptions } from "./helper.util";


const DEFAULT_USER = new UserDto({
  login: 'test',
  fName: 'User',
  lName: 'Test',
  lang: 'en',
  tz: 'UTC',
  offset: 0
});

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser$: BehaviorSubject<UserDto> = new BehaviorSubject<UserDto>({});
    isLoggedIn = false

    constructor(private httpClient: HttpClient) {}

    checkUserSession(redirectUrl: string): Observable<UserDto> {
        if (redirectUrl !== 'empty') {
          return this.httpClient.get<UserDto>('LOGIN_PATH', getOptions({redirectUrl}))
            .pipe(
              tap((user) => this.currentUser$.next(user)),
              tap(() => this.isLoggedIn = true),
              catchError((e) => {
                // TODO: auth logic (provide NestJs Passport package config
                console.log(e);
                this.isLoggedIn = true;
                return of(new UserDto({login: 'testUser', fName: 'test', lName: 'test'}));
              })
            );
        } else {
          return of(DEFAULT_USER).pipe(
            tap((user) => this.currentUser$.next(user)),
            tap(() => this.isLoggedIn = true)
          )
        }
    }

    login(): Observable<UserDto> {
      return of(DEFAULT_USER).pipe(
        debounceTime(1000),
        tap((user) => this.currentUser$.next(user)),
        tap(() => this.isLoggedIn = true)
      );
    }
}
