import { TransactionService } from './../../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/shared/models/transaction';

@Component({
  selector: 'app-list-transactions-page',
  templateUrl: './list-transactions-page.component.html'
})
export class ListTransactionsPageComponent implements OnInit {
  public transactions$: Observable<Transaction[]>
  
  constructor() { 
  }

  ngOnInit() {

  }

}
