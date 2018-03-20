import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdherentsComponent } from './adherents/adherents.component';
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: 'adherents',
    component: AdherentsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdherentsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
