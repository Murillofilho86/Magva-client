import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';

@Component({
  selector: 'app-list-cards-page',
  templateUrl: './list-cards-page.component.html'
})
export class ListCardsPageComponent implements OnInit {

public _cards$: Observable<Card[]>

  constructor() { }

  ngOnInit() {
  }

}
