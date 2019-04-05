import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionsPageComponent } from './transactions/create-transactions-page/create-transactions-page.component';
import { ListTransactionsPageComponent } from './transactions/list-transactions-page/list-transactions-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CardPageComponent } from './cards/card-page/card-page.component';
import { ListCardsPageComponent } from './cards/list-cards-page/list-cards-page.component';
import { CustomerPageComponent } from './customer/customer-page/customer-page.component';
import { EditCardPageComponent } from './cards/edit-card-page/edit-card-page.component';

@NgModule({
  declarations: [
    CustomerPageComponent,
    CardPageComponent,
    CreateTransactionsPageComponent,
    ListTransactionsPageComponent,
    ListCardsPageComponent,
    EditCardPageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ],

  exports: [
    CustomerPageComponent,
    CardPageComponent,
    CreateTransactionsPageComponent,
    ListTransactionsPageComponent,
    ListCardsPageComponent,
    EditCardPageComponent
  ]
})
export class PagesModule { }
