import { CardPageComponent } from './pages/card-page/card-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame.page';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: TransactionsPageComponent },
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
