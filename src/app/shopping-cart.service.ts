import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: Item[] = [];

  constructor() { }

  addToCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item: Item) {
    const index = this.shoppingCart.indexOf(item);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
  }

  existInCart(item: Item): boolean {
    const itemInCart = this.shoppingCart.find(x => x._id === item._id);
    return itemInCart ? true : false;

  }

  getItem(itemId: string): Item {
    return this.shoppingCart.find(x => x._id === itemId);
  }
}
