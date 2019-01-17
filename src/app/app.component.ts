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
}
