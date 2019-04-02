import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-transactions-page',
  templateUrl: './list-transactions-page.component.html'
})
export class ListTransactionsPageComponent implements OnInit {
  public transactions$: Observable<any[]>
  
  constructor() { }

  ngOnInit() {
  }

}
