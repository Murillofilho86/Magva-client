import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ValidationService } from 'src/app/services/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html'
})
export class CustomerPageComponent implements OnInit {

  public _customers$: Observable<Customer[]>
  customer: Customer;
  customerForm: FormGroup;
  message: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: CustomerService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.customerForm = this._formBuilder.group({
      'name': [null, Validators.required],
      'document': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required]
    });
  }

  registerCustomer() {

    const customer = this.customerForm.getRawValue() as Customer
    this._service.register(customer)
      .subscribe(
        (data) => {

          alert(this.getMessage(data.message));
          this._router.navigate(['']);
        },
        err => {
          'Erro'
        }
      )

  }

  private getMessage(msg: string): string {
    switch (msg) {

      case 'CREATE_SUCCESS': this.message = 'Registro inserido com sucesso.';
        break;
      case 'DOCUMENT_IS_NOT_VALID': this.message = 'Documento inválido';
        break;
    }
    return this.message;
  }

}
