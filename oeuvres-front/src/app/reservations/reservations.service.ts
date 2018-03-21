import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Reservation} from "../models/Reservation";

@Injectable()
export class ReservationsService {

  constructor(private http: Http) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http
      .get("http://localhost:8080/api/reservations")
      .map(reservation => reservation.json())
  }
}
