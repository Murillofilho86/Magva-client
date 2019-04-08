import { Transaction } from 'src/app/shared/models/transaction';
import { TransactionService } from './../../../services/transaction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/services/alert.service';

@Component({
  selector: 'app-create-transactions-page',
  templateUrl: './create-transactions-page.component.html'
})
export class CreateTransactionsPageComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _service: TransactionService,
    private _router: Router,
    private _alertService: AlertService) { }

  ngOnInit() {
    this.transactionForm = this._formBuilder.group({
      'number': [null, Validators.required],
      'securityCode': [null, Validators.required],
      'amount': [null, Validators.required],
      'numberInstallments': [null, Validators.required],
      'type': [null, Validators.required]
    });
  }

  insertTransaction() {
    const transaction = this.transactionForm.getRawValue() as Transaction;
    const debit: boolean = true;
    let message: string;

    if (transaction.type == debit) {
      this._service.deposit(transaction)
        .subscribe((data) => {

        })
    }
    else {
      this._service.withdrawal(transaction)
        .subscribe((data) => {
            this._alertService.warning(data.message);
            this._router.navigate(['']);
        },
          ((data) => {

          })
        );
    }

  }

}
