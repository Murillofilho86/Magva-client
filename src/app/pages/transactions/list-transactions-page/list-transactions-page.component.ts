import { TransactionService } from './../../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from 'src/app/shared/models/transaction';
import { delay } from 'q';

@Component({
  selector: 'app-list-transactions-page',
  templateUrl: './list-transactions-page.component.html'
})
export class ListTransactionsPageComponent implements OnInit {

  public transactions$: Observable<Transaction[]>
error$ = new Subject<Boolean>();

  constructor(private _service: TransactionService) { 
  }

  ngOnInit() {
   this.transactions$ = this._service.getTransactions()
   .pipe(
    catchError(error => {
      delay(2000)
       console.log(error);
       this.error$.next(true);
       return empty();
     })
   ); 
  }

}
