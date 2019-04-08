import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cards-page',
  templateUrl: './list-cards-page.component.html'
})
export class ListCardsPageComponent implements OnInit {
  cardForm: FormGroup
  public _cards$: Observable<Card[]>

  constructor(
    private formBuilder: FormBuilder,
    private _service: CardService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._cards$ = this._service.getAll();
    console.log(this._cards$)
  }

  deleteCard(id: string){
     this._service.delete(id)
     .subscribe(() => {
      alert('Excluído com sucesso!');
       this._router.navigate['']
     },
     err => {
       'err'
     });
  }
}
