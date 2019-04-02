import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FramePageComponent } from './pages/master/frame.page';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
