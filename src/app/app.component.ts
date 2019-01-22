import { ShoppingCartService } from './shopping-cart.service';
import { db } from './../db';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Item[] = db;
  shoppingCart: Item[] = [];

  constructor(private cartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.shoppingCart = this.cartService.shoppingCart;
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
    console.log('load more');
  }
}
