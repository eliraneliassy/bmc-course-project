import { FetchFeeds } from './../../store/feed.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Router } from '@angular/router';
import { FeedService } from 'src/app/feed.service';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { getFeedItems } from '../../store/feed.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],

})
export class FeedComponent implements OnInit, OnDestroy {


  isLoading: boolean;
  page = 0;
  feedSubscription: Subscription;
  data: Item[] = [];

  constructor(private feedService: FeedService,
    private cartService: ShoppingCartService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchFeeds());
    this.store.select(getFeedItems)
      .subscribe((items: Item[]) => this.data = items);
  }

  loadMore() {
    this.page++;
    this.isLoading = true;
    this.feedService.getFeed(this.page)
      .subscribe((items: Item[]) => {
        this.data = [...this.data, ...items];
        this.isLoading = false;
      });
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.cartService.existInCart(item);
  }

  navigateToItem(item) {
    this.router.navigate(['item'], { queryParams: { item_id: item._id } });
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }

}
