import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowItemComponent } from './show-item/show-item.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'item', component: ShowItemComponent },
  { path: 'item/:id', component: ShowItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
