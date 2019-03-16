import {
  Component, OnInit, Input, EventEmitter,
  Output, OnDestroy, AfterViewChecked, AfterContentInit, AfterContentChecked, AfterViewInit, OnChanges, DoCheck, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
// implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit,
//   AfterContentInit, AfterContentChecked, OnChanges, DoCheck {

  @Input() item: Item = null;
  @Input() existInCart = false;
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFromCartEvent: EventEmitter<any> = new EventEmitter<any>();

  // constructor() {
  //   console.log('ctor');
  // }

  // ngOnInit() {
  //   console.log('on init');
  // }
  addToCartClicked(event: Event) {
    event.stopPropagation();
    this.addToCartEvent.emit(this.item);
  }

  removeFromCartClicked(event: Event) {
    event.stopPropagation();
    this.removeFromCartEvent.emit(this.item);
  }

  // ngDoCheck(): void {
  //   console.log('do check');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After content checked');

  // }
  // ngAfterContentInit(): void {
  //   console.log('After Content Init');

  // }
  // ngAfterViewInit(): void {
  //   console.log('After View Init');

  // }
  // ngAfterViewChecked(): void {
  //   console.log('After View Checked');

  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('on changes ', changes);
  // }
  // ngOnDestroy(): void {
  //   console.log('On Destroy');
  // }


}
