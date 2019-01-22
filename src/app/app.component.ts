import { FeedService } from './feed.service';
import { ShoppingCartService } from './shopping-cart.service';
import { db } from './../db';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  data: Item[] = [];
  shoppingCart: Item[] = [];
  page = 0;

  feedSubscription: Subscription;
  isLoading: boolean;

  constructor(private cartService: ShoppingCartService,
    private feedService: FeedService) { }

  ngOnInit(): void {
    this.shoppingCart = this.cartService.shoppingCart;
    this.feedSubscription = this.feedService.getFeed(0)
      .subscribe((items: Item[]) => this.data = items);
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

  loadMore() {
    this.page++;
    this.isLoading = true;
    this.feedService.getFeed(this.page)
      .subscribe((items: Item[]) => {
        this.data = [...this.data, ...items];
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }
}
