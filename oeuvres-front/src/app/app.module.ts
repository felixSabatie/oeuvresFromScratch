import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AdherentsComponent} from './adherents/adherents.component';
import {RouterModule} from "@angular/router";
import {AdherentsService} from "./adherents/adherents.service";
import {NavbarComponent} from './navbar/navbar.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {HomeComponent} from './home/home.component';
import {ReservationsService} from "./reservations/reservations.service";
import {OeuvresComponent} from './oeuvres/oeuvres.component';
import {OeuvresService} from "./oeuvres/oeuvres.service";
import { AdherentFormComponent } from './adherents/adherent-form/adherent-form.component';
import { AdherentCreateComponent } from './adherents/adherent-create/adherent-create.component';
import { AdherentEditComponent } from './adherents/adherent-edit/adherent-edit.component';
import { OeuvresCreateComponent } from './oeuvres/oeuvres-create/oeuvres-create.component';
import { OeuvresEditComponent } from './oeuvres/oeuvres-edit/oeuvres-edit.component';
import { OeuvresFormComponent } from './oeuvres/oeuvres-form/oeuvres-form.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';
import { ReservationCreateComponent } from './reservations/reservation-create/reservation-create.component';
import { ReservationEditComponent } from './reservations/reservation-edit/reservation-edit.component';

// TODO 26/03/2018 Irindul : Routes with child rather than adherent, adherent/create ect...
const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adherents',
    component: AdherentsComponent
  },
  {
    path: 'adherents/create',
    component: AdherentCreateComponent
  },
  {
    path:'adherents/:id/edit',
    component: AdherentEditComponent
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  },
  {
    path: 'reservations/create',
    component: ReservationCreateComponent
  },
  {
    path: 'reservations/:id/edit',
    component: ReservationEditComponent
  },
  {
    path: 'oeuvres',
    component: OeuvresComponent
  },
  {
    path: 'oeuvres/create',
    component: OeuvresCreateComponent
  },
  {
    path: 'oeuvres/:id/edit',
    component : OeuvresEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdherentsComponent,
    NavbarComponent,
    ReservationsComponent,
    HomeComponent,
    OeuvresComponent,
    AdherentFormComponent,
    AdherentCreateComponent,
    AdherentEditComponent,
    ReservationFormComponent,
    ReservationCreateComponent,
    ReservationEditComponent
    AdherentEditComponent,
    OeuvresCreateComponent,
    OeuvresEditComponent,
    OeuvresFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AdherentsService,
    ReservationsService,
    OeuvresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
