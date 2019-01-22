import { SuggestionsService } from './suggestions.service';
import { FeedService } from './feed.service';
import { ShoppingCartService } from './shopping-cart.service';
import { db } from './../db';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


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

  serachTerm$: Subject<string> = new Subject<string>();

  constructor(private cartService: ShoppingCartService,
    private feedService: FeedService,
    private suggestionsService: SuggestionsService) { }

  ngOnInit(): void {
    this.shoppingCart = this.cartService.shoppingCart;
    this.feedSubscription = this.feedService.getFeed(0)
      .subscribe((items: Item[]) => this.data = items);

    this.serachTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => {
          if (term) {
            return this.suggestionsService.getSuggestions(term);
          }
        })
      )
      .subscribe(console.log);
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

  doSearch(term) {
    this.serachTerm$.next(term);
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }
}
