import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:12345';
  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get(this.API + '/user');
  }

  getUser(email): Observable<any> {
    return this.http.get(this.API + '/user/' + email);
  }

}
