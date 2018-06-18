import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemModel } from './';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) {}

  getItems()/*: Observable<ItemModel[]>*/ {
    return this.http.get('https://swapi.co/api/people/').pipe(
      map(data => data['results'].map(item => {
          return {
            id: item['url'], name: item['name'], created: new Date(item['created'])
          };
        })
      )
    );
  }
}
