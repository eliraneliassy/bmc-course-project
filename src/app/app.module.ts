import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChangeColorDirective } from './change-color.directive';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChangeColorDirective,
    InfiniteScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
