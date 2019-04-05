import { Transaction } from 'src/app/shared/models/transaction';
import { Card } from 'src/app/shared/models/card';
import { TransactionService } from './../../../services/transaction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transactions-page',
  templateUrl: './create-transactions-page.component.html'
})
export class CreateTransactionsPageComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _service: TransactionService,
    private _router: Router) { }

  ngOnInit() {
    this.transactionForm = this._formBuilder.group({
        'number': [null, Validators.required],
        'securityCode': [null, Validators.required],
        'amount': [null, Validators.required],
        'numberInstallments': [1, Validators.required],
        'type': [1, Validators.required],
        'document': [null, Validators.required]
    }); 
  }

  insertTransaction(){
    const transaction = this.transactionForm.getRawValue() as Transaction;
    if(transaction.type){
      this._service.deposit(transaction)
      .subscribe(() => {
        this._router.navigate['/transactions/list-transactions'];
      })
    }
    else{
      this._service.withdrawal(transaction)
      .subscribe(() => {
        this._router.navigate['/transactions/list-transactions'];
      })
    }
 
  }

}
