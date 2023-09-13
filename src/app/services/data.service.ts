import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:1500/menu/get-menu';
  // url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getDatas() {
    return this.http.get(this.url);
  }
}
