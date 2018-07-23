import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';

@Injectable()
export class AuthenticationService {

  private readonly loginPath = '/api/login';
  private readonly registerPath = '/api/register';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginPath, { username: username, password: password })
      .pipe(map((res: any) => {
        if (res && res.token) {
          localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
          this.isLoggedIn = true;
        }
      }));
  }

  register(email: string, username: string, password: string) {
    return this.http.post<any>(this.registerPath, { email: email, username: username, password: password })
  }

  loggedIn(): boolean {
    if (this.getToken() != '') return true;
    else return false;
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    }
    else {
      return undefined;
    }
  }

}
