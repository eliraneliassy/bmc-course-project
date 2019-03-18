import { FeedComponent } from './components/feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromFeed from './store/feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './store/feed.effects';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    StoreModule.forFeature('feed', fromFeed.reducer),
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }
