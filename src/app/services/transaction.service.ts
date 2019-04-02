import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../shared/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getTransactions(){
    return this.http.get<Transaction[]>(environment.URL_API + '/v1/transactions')
  } 
}
