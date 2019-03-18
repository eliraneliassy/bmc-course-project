import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://api.fashbash.co/api/';

  constructor(private httpClient: HttpClient) { }

  getFeed(page: number = 0): Observable<Item[]> {

    let myParams: HttpParams = new HttpParams();
    myParams = myParams.append('page', page.toString());

    return this.httpClient.get<Item[]>(this.BASE_URL + 'feed', { params: myParams });
  }
}
