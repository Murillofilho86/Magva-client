import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ControlMessagesComponent } from './components/control-message/control-message.component';

@NgModule({
  declarations: [
      NavbarComponent,
      ControlMessagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule ,
    ReactiveFormsModule 
  ],
  exports:[
    NavbarComponent,
    ControlMessagesComponent,
  ]
})
export class SharedModule { }
