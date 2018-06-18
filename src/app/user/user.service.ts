import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    return this.http.get('/users/' + id);
  }
}
