import { Action } from '@ngrx/store';

export enum FeedActionTypes {
  FetchFeeds = '[Feed] Fetch Feeds',
  FetchFeedsSuccess = '[Feed] Fetch Feeds Success',

}

export class FetchFeeds implements Action {
  readonly type = FeedActionTypes.FetchFeeds;
}

export class FetchFeedsSuccess implements Action {
  readonly type = FeedActionTypes.FetchFeedsSuccess;
  constructor(public payload: Item[]) { }
}


export type FeedActions = FetchFeeds | FetchFeedsSuccess;
