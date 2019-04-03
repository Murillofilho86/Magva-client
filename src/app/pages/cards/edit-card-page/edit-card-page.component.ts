import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/models/card';

@Component({
  selector: 'app-edit-card-page',
  templateUrl: './edit-card-page.component.html'
})
export class EditCardPageComponent implements OnInit {

  @Input('card') _card: Card;
  constructor() { }

  ngOnInit() {
  }

}
