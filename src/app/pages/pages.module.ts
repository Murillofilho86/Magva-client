import { ClientPageComponent } from './client-page/client-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page/card-page.component';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';

@NgModule({
  declarations: [
    ClientPageComponent,
    CardPageComponent,
    TransactionsPageComponent,
  ],
  imports: [
    CommonModule
  
  ],

  exports: [
    ClientPageComponent
  ]
})
export class PagesModule { }
