import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchItem} from '../models/search-item';
let key: string;
key = 'AIzaSyBWUwUkl-DN7UKgN2Xyxd2peJh-et0aVt0';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<SearchItem []> {
    return this.httpClient.get<SearchItem[]>(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${key}
     &part=snippet,statistics`);
  }
}
