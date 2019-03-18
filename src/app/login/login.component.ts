import { UserLogin, UserLoginSucess } from './../store/app.actions';
import { State } from './../reducers/index';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    this.store.subscribe(console.log);
  }

  submit(form: NgForm) {
    // this.authService.login(form.value['email']);
    this.store.dispatch(new UserLogin());
    this.store.dispatch(new UserLoginSucess(form.value['email']));
    this.router.navigate(['/feed']);
  }

}
