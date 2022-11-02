import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HkCardComponent } from './components/hk-card/hk-card.component';
import { HkCardHeaderComponent } from './components/hk-card/hk-card-header/hk-card-header.component';
import { HkCardBodyComponent } from './components/hk-card/hk-card-body/hk-card-body.component';
import { HkCardFooterComponent } from './components/hk-card/hk-card-footer/hk-card-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HkCardComponent,
    HkCardHeaderComponent,
    HkCardBodyComponent,
    HkCardFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
