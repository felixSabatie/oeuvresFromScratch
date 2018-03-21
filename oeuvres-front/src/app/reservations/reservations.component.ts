import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/Reservation";
import {ReservationsService} from "./reservations.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(
      reservations => this.reservations = reservations,
      error => console.error(error)
    );
  }

}
