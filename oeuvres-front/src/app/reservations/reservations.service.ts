import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Reservation} from "../models/Reservation";
import {Env} from "../Env";
import {AdherentsService} from "../adherents/adherents.service";
import {OeuvresService} from "../oeuvres/oeuvres.service";

@Injectable()
export class ReservationsService {
  private static apiUrl = Env.API_URL + 'reservations';

  constructor(private http: Http, private adherentsService: AdherentsService, private oeuvresService: OeuvresService) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http
      .get(ReservationsService.apiUrl)
      .map(reservation => reservation.json());
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http
      .post(ReservationsService.apiUrl, reservation)
      .map(reservation => reservation.json());
  }

  getReservation(reservationId: number): Observable<Reservation> {
    return this.http
      .get(ReservationsService.apiUrl + '/' + reservationId)
      .map(reservation => reservation.json());
  }

  editReservation(reservation: Reservation): Observable<Reservation> {
    return this.http
      .put(ReservationsService.apiUrl + '/' + reservation.idReservation, reservation)
      .map(reservation => reservation.json());
  }

  deleteReservation(reservation: Reservation): Observable<Response> {
    return this.http.delete(ReservationsService.apiUrl + '/' + reservation.idReservation);
  }

  getAdherent(reservation: Reservation): void {
    this.adherentsService.getAdherentById(reservation.idAdherent).subscribe(
      adherent => reservation.adherent = adherent,
      error => console.error(error)
    );
  }

  getOeuvre(reservation: Reservation): void {
    this.oeuvresService.getOeuvreById(reservation.idOeuvrevente).subscribe(
      oeuvre => reservation.oeuvreVente = oeuvre,
      error => console.error(error)
    );
  }
}
