import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedService } from '../feed.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {


  isLoading: boolean;
  page = 0;
  feedSubscription: Subscription;
  data: Item[] = [];

  constructor(private feedService: FeedService,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.feedSubscription = this.feedService.getFeed(0)
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

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }

}
