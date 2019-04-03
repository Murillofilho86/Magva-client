import { ListCardsPageComponent } from './pages/cards/list-cards-page/list-cards-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransactionsPageComponent } from './pages/transactions/list-transactions-page/list-transactions-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CreateTransactionsPageComponent } from './pages/transactions/create-transactions-page/create-transactions-page.component';
import { CardPageComponent } from './pages/cards/card-page/card-page.component';
import { CustomerPageComponent } from './pages/customer/customer-page/customer-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ListTransactionsPageComponent },
      { path: 'create-transactions', component: CreateTransactionsPageComponent },
      { path: 'customer', component: CustomerPageComponent },
      { path: 'list-cards', component: ListCardsPageComponent },
      { path: 'card', component: CardPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
