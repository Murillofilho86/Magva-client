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

  public deposit(deposit: Transaction) {
    return this.http.post<Transaction>(environment.URL_API + '/v1/transactions/deposit', deposit);
  }

  public withdrawal(withdrawal: Transaction) {
    return this.http.post<Transaction>(environment.URL_API + '/v1/transactions/withdrawal', withdrawal);
  }
 
  public getById(id: string) {
    return this.http.get<Transaction>(`${environment.URL_API}/v1/transactions/${id}`)
  }

  public delete(id: string) {
    return this.http.delete<Transaction>(`${environment.URL_API}/v1/transactions/${id}`)
  }
}
