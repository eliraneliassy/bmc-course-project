import { FeedState } from './feed.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getFeedState = createFeatureSelector<FeedState>('feed');

export const getFeedItems = createSelector(getFeedState, (feed: FeedState) =>
    feed.items);
