import { FeedService } from './../../../feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FeedActionTypes, FeedActions, FetchFeedsSuccess } from './feed.actions';
import { switchMap, map } from 'rxjs/operators';



@Injectable()
export class FeedEffects {

  constructor(private actions$: Actions,
    private feedService: FeedService) { }

  @Effect()
  fetchFeed$ = this.actions$
    .pipe(
      ofType(FeedActionTypes.FetchFeeds),
      switchMap(() => this.feedService.getFeed(0)
        .pipe(map((items: Item[]) => new FetchFeedsSuccess(items))))
    );

}
