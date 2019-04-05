import { CardService } from './../../../services/card.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-card-page',
  templateUrl: './edit-card-page.component.html'
})
export class EditCardPageComponent implements OnInit {
  
  editForm: FormGroup;

  @Input('card') _card: Card;

  constructor(private formbuilder: FormBuilder,
    private _service: CardService) { }

  ngOnInit() {

  this.editForm = this.formbuilder.group({
     'active': [this._card.active],
     'number': [this._card.number],
     'securityCode': [this._card.securityCode],
     'expirationDate': [this._card.expirationDate],
     'balance': [this._card.balance]
  })
  }

}
