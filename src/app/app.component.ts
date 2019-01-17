import { db } from './../db';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any[] = db;
  shoppingCart: any[] = [];

  addToCart(item) {
    this.shoppingCart.push(item);
  }

  removeFromCart(item) {
    const index = this.shoppingCart.indexOf(item);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
  }

  existInCart(item): boolean {
    return this.shoppingCart.indexOf(item) > -1;
  }

  loadMore() {
    console.log('load more');
  }
}
