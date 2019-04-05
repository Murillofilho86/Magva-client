import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../shared/models/customer';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {


    constructor(private http: HttpClient) {
    }

    public register(customer: Customer) {
            return this.http.post<Customer>(environment.URL_API + '/v1/customers', customer);
    }

    public getAll() {
        return this.http.get<Customer[]>(environment.URL_API + '/v1/customers')
    }
    public getById(id: string) {
        return this.http.get<Customer>(`${environment.URL_API}/v1/customers/${id}`)
    }

    public delete(id: string) {
        return this.http.delete<Customer>(`${environment.URL_API}/v1/customers/${id}`)
    }
}