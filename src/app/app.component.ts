import { SuggestionsService } from './suggestions.service';
import { FeedService } from './feed.service';
import { ShoppingCartService } from './shopping-cart.service';
import { db } from './../db';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {



  




  serachTerm$: Subject<string> = new Subject<string>();

  constructor(
    private suggestionsService: SuggestionsService) { }

  ngOnInit(): void {


    this.serachTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => {
          if (term) {
            return this.suggestionsService.getSuggestions(term);
          }
        })
      )
      .subscribe(console.log);
  }





  doSearch(term) {
    this.serachTerm$.next(term);
  }

  ngOnDestroy(): void {

  }
}
