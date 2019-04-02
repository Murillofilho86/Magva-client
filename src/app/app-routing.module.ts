import { CardPageComponent } from './pages/card-page/card-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransactionsPageComponent } from './pages/transactions/list-transactions-page/list-transactions-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CreateTransactionsPageComponent } from './pages/transactions/create-transactions-page/create-transactions-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ListTransactionsPageComponent },
      { path: 'create-transactions', component: CreateTransactionsPageComponent },
      { path: 'client', component: ClientPageComponent },
      { path: 'card', component: CardPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
