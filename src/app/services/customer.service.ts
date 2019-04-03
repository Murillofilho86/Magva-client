import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../shared/models/customer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransactionService { 
    

    constructor(private http: HttpClient) {
             
    }

    register(customer: Customer) : Observable<Customer> {
        return this.http.post<Customer>(environment.URL_API + '/v1/customers', customer);
    }

    getAll(): Observable<Customer[]>{
        return this.http.get<Customer[]>(environment.URL_API + '/v1/customers')
    }
    getById(id: string): Observable<Customer> {
        return this.http.get<Customer>(`${environment.URL_API}/v1/customers/${id}`)
    }

    delete(id: string): Observable<Customer>{
        return this.http.delete<Customer>(`${environment.URL_API}/v1/customers/${id}`)
    }
}