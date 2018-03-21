import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdherentsComponent } from './adherents/adherents.component';
import {RouterModule} from "@angular/router";
import {AdherentsService} from "./adherents/adherents.service";
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adherents',
    component: AdherentsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdherentsComponent,
    NavbarComponent,
    ReservationsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdherentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
