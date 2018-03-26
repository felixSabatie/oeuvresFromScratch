import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../models/Reservation";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {
  private reservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit() {
  }

  createReservation() {

  }

}
