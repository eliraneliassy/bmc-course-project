import { Action } from '@ngrx/store';

export enum AppActionTypes {
  UserLogin = '[App] User Login',
  UserLoginSuccess = '[App] User Login Success',


}

export class UserLogin implements Action {
  readonly type = AppActionTypes.UserLogin;
}

export class UserLoginSucess implements Action {
  readonly type = AppActionTypes.UserLoginSuccess;

  constructor(public payload: string) { }
}


export type AppActions = UserLogin | UserLoginSucess;
