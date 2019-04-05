import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ControlMessagesComponent } from './components/control-message/control-message.component';
import { DatePipe } from './pipes/date-pipe.pipe';

@NgModule({
  declarations: [
      NavbarComponent,
      ControlMessagesComponent,
      DatePipe    
  ],
  imports: [
    CommonModule,
    RouterModule ,
    ReactiveFormsModule 
  ],
  exports:[
    NavbarComponent,
    ControlMessagesComponent,
    DatePipe    
  ]
})
export class SharedModule { }
