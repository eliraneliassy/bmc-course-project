import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { db } from 'src/db';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {

  item: Item;
  data = db;

  constructor(private route: ActivatedRoute,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.item = this.data.find(x => x._id === params['item_id']);
      console.log(this.item);
    });

    this.route.params.subscribe((params) => {
      this.item = this.data.find(x => x._id === params['id']);
    });
  }

}
