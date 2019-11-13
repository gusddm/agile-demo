import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../model/transaction';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  httpClient:  HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUrl + '/users').pipe(
      map(users => {       
        users.map(user => user.transactions.sort((tx1:Transaction, tx2:Transaction) => {
          return (new Date(tx2.date)).getTime() - (new Date(tx1.date).getTime())
        }))
        return users;
      }
    ))
  }

}
