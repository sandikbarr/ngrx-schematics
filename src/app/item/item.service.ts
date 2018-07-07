import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemModel } from './';
import { Tag } from '../models/tag.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemModel[]> {
    return this.http.get('https://feeder.prx.org/api/v1/podcasts').pipe(
      map(data =>
        data['_embedded']['prx:items'].map(item => {
          return {
            id: item['id'].toString(),
            name: item['title'],
            created: new Date(item['createdAt'])
          };
        })
      )
    );
  }

  getTags(itemId: string): Observable<Tag[]> {
    return this.http.get('https://feeder.prx.org/api/v1/podcasts/' + itemId + '/episodes').pipe(
      map(data =>
        data['_embedded']['prx:items'].map(item => {
          return {
            id: item['id'],
            itemId,
            name: item['title'],
            created: new Date(item['publishedAt'])
          };
        })
      )
    );
  }
}
