import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  BASE_URL = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getSuggestions(term) {
    let myParams: HttpParams = new HttpParams();
    myParams = myParams.append('term', term);

    return this.httpClient.get<any>
      (this.BASE_URL + '/suggestions', { params: myParams })
      .pipe(
        map((x) => x.items)
      );
  }
}
