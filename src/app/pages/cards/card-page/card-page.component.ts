import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from './../../../services/card.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html'
})
export class CardPageComponent implements OnInit {

  public _card$: Observable<Card[]>
  cardForm: FormGroup;
  message: string;

  constructor(private _service: CardService,
    private formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      'cardholderName': [null, Validators.required],
      'document': [null, Validators.required],
      'number': [null, Validators.required],
      'securityCode': [null, [Validators.required, Validators.maxLength(5)]],
      'expirationDate': [null, Validators.required],
      'type': [1, Validators.required],
      'password': [null, Validators.minLength(4),
        Validators.maxLength(6)],
      'cardBrand': [null, Validators.required],
      'active': [1],
      'balance': [0],
      'hasPassword': [0]
    });
  }

  insertCard() {
    const card = this.cardForm.getRawValue() as Card;
    console.log(card);
    this._service.add(card)
      .subscribe(
        (data) => {
          alert(this.getMessage(data.message));
          this._router.navigate(['/cards/list-card']);
        },
        err => {
          'Erro'
        }
      );
  }

  private getMessage(msg: string): string {
    switch (msg) {
      case 'CREATE_SUCCESS': this.message = 'Registro inserido com sucesso.';
        break;
      case 'DOCUMENT_IS_NOT_VALID': this.message = 'Documento inválido';
        break;
      case 'PASSWORD_IS_NOT_VALID': this.message = 'Erro no tamanho da senha informada';
        break;
    }
    return this.message;
  }
}
