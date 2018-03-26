import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
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
    path: 'oeuvres',
    component: OeuvresComponent
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
    AdherentEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
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
