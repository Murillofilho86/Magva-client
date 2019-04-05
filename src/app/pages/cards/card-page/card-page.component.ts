import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from './../../../services/card.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html'
})
export class CardPageComponent implements OnInit {

  public _card$: Observable<Card[]>
  cardForm: FormGroup;


  constructor(private _service: CardService,
    private formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      'cardholderName': [null, Validators.required],
      'number': [null, Validators.required],
      'securityCode': [null, [Validators.required, Validators.maxLength(5)]],
      'expirationDate': [null, Validators.required],
      'type': [null, Validators.required],
      'password': [null],
      'cardBrand': [null, Validators.required]
    });
  }

  insertCard() {
    const card = this.cardForm.getRawValue() as Card;
    this._service.add(card)
    .subscribe(
      () => {
       
      },
      err => {
        'Erro'
      }
    );

    this._router.navigate(['/cards/list-card']);
  }

}
