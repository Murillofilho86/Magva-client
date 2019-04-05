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

  customerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _service: CustomerService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.customerForm = this.formBuilder.group({
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
        () => {
          this._router.navigate(['/']);
        },
        err => {
          'Erro'
        }
      )

  }

}
