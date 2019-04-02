import { ClientPageComponent } from './client-page/client-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page/card-page.component';
import { CreateTransactionsPageComponent } from './transactions/create-transactions-page/create-transactions-page.component';
import { ListTransactionsPageComponent } from './transactions/list-transactions-page/list-transactions-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientPageComponent,
    CardPageComponent,
    CreateTransactionsPageComponent,
    ListTransactionsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    ClientPageComponent,
    CardPageComponent,
    CreateTransactionsPageComponent,
    ListTransactionsPageComponent
  ]
})
export class PagesModule { }
