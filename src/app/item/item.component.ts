import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any = null;
  @Input() existInCart = false;
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFromCartEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  addToCartClicked() {
    this.addToCartEvent.emit(this.item);
  }

  removeFromCartClicked() {
    this.removeFromCartEvent.emit(this.item);
  }

}
