import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private router: Router) { }

  getUser() {
    return this.user$.asObservable();
  }

  private setUser(userName) {
    this.user$.next(userName);
  }

  login(user: string) {
    // TODO : Connect with server
    this.setUser(user);
  }

  logout() {
    this.setUser(null);
    this.router.navigate(['login']);
  }
}
