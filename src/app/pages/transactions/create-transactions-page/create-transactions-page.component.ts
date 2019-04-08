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
  message: string;

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
      'type': [1, Validators.required]
    });
  }

  insertTransaction() {
    const transaction = this.transactionForm.getRawValue() as Transaction;
    const debit: boolean = true;
    let message: string;

    if (transaction.type == debit) {
      this._service.deposit(transaction)
        .subscribe((data) => {
          if (data.message == 'CREATE_SUCCESS' ||
            data.message == 'UPDATE_SUCCESS') {
            alert(this.getMessage(data.message));
            //this._alertService.success(data.message);
          } else {
            alert(this.getMessage(data.message));
            //this._alertService.warning(data.message);
          }
          this._router.navigate(['']);
        })
    }
    else {
      this._service.withdrawal(transaction)
        .subscribe((data) => {

          if (data.message == 'CREATE_SUCCESS' ||
            data.message == 'UPDATE_SUCCESS') {
            alert(this.getMessage(data.message));
            //this._alertService.success(data.message);
          } else {
            alert(this.getMessage(data.message));
            //this._alertService.warning(data.message);
          }
          this._router.navigate(['']);
        },
          err => {
            console.log(err);
            this._alertService.warning('Entre em contato com administrador do sistema!')
          });
    }
  }

  private getMessage(msg: string): string {
    switch (msg) {
      case 'INSUFFICIENT_BALANCE': this.message = 'Saldo insuficiente.';
        break;
      case 'CARD_BLOCKED': this.message = 'Cartão bloqueado.';
        break;
      case 'UPDATE_SUCCESS': this.message = 'Registro atualizado com sucesso.';
        break;
      case 'CREATE_SUCCESS': this.message = 'Registro inserido com sucesso.';
        break;
      case 'VALUE_IS_NOT_VALID': this.message = 'Valor informado não é valido';
        break;
      case 'CARD_NOT_EXISTS': this.message = 'Cartão não localizado';
        break;
    }
    return this.message;
  }

}
