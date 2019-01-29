import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChangeColorDirective } from './change-color.directive';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { DiscountPipe } from './discount.pipe';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChangeColorDirective,
    InfiniteScrollDirective,
    DiscountPipe,
    FeedComponent,
    ShoppingCartComponent,
    ShowItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
