import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Reservation} from "../models/Reservation";
import {Env} from "../Env";

@Injectable()
export class ReservationsService {
  private static apiUrl = Env.API_URL + 'reservations';

  constructor(private http: Http) {
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
}
