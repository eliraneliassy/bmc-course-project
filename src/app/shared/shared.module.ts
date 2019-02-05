import { DiscountPipe } from './discount.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [ItemComponent, DiscountPipe, InfiniteScrollDirective],
  exports: [ItemComponent, DiscountPipe, InfiniteScrollDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
