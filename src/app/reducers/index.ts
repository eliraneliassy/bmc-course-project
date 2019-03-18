import { AppState, reducer } from './../store/app.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
