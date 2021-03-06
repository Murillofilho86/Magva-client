import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    AlertComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
