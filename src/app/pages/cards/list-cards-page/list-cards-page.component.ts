import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list-cards-page',
  templateUrl: './list-cards-page.component.html'
})
export class ListCardsPageComponent implements OnInit {
  cardForm: FormGroup
  public _cards$: Observable<Card[]>

  constructor(
    private formBuilder: FormBuilder,
    private _service: CardService
  ) { }

  ngOnInit() {
    this._cards$ = this._service.getAll();
  }

}
