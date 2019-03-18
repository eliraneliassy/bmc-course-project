import { AppActions, AppActionTypes } from './app.actions';
import { Action } from '@ngrx/store';


export interface AppState {
  user: string;
  loader: boolean;
}

export const initialState: AppState = {
  user: null,
  loader: false
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case (AppActionTypes.UserLogin):
      {
        return { ...state, loader: true };
      }

    case (AppActionTypes.UserLoginSuccess): {
      return { ...state, user: action.payload, loader: false };
    }
    default:
      return state;
  }
}
