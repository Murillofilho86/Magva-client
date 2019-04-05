import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../shared/models/card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  public add(card: Card): Observable<Card> {
    return this.http.post<Card>(environment.URL_API + '/v1/cards', card);
  }

  public getAll(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.URL_API + '/v1/cards')
  }
  public getById(id: string): Observable<Card> {
    return this.http.get<Card>(`${environment.URL_API}/v1/cards/${id}`)
  }

  public delete(id: string): Observable<Card> {
    return this.http.delete<Card>(`${environment.URL_API}/v1/cards/${id}`)
  }
}
