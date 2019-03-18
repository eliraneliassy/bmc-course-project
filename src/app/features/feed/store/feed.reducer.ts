import { FeedActions, FeedActionTypes } from './feed.actions';
import { Action } from '@ngrx/store';


export interface FeedState {
  items: Item[];
}

export const initialState: FeedState = {
  items: []
};

export function reducer(state = initialState, action: FeedActions): FeedState {
  switch (action.type) {
    case (FeedActionTypes.FetchFeeds): {
      return { ...state };
    }
    case (FeedActionTypes.FetchFeedsSuccess): {
      return { ...state, items: action.payload };
    }
    default:
      return state;
  }
}
