import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';

import { Config, ConfigService } from './config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
