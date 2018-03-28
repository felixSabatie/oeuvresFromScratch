import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {ReservationsService} from "../reservations.service";
import {Router} from '@angular/router';
import {OeuvresService} from "../../oeuvres/oeuvres.service";

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {
  private reservation: Reservation = new Reservation();

  constructor(private reservationService: ReservationsService, private oeuvreService: OeuvresService, private router: Router) {
  }

  ngOnInit() {
  }

  createReservation() {
    this.reservationService.createReservation(this.reservation).subscribe(
      reservation => {
        this.oeuvreService.getOeuvreById(this.reservation.idOeuvrevente).subscribe(
          oeuvre => {
            oeuvre.etatOeuvrevente = 'R';
            this.oeuvreService.editOeuvre(oeuvre).subscribe(
              oeuvre => {/* Do nothing */},
              error => console.error(error)
            );
          });
        this.router.navigateByUrl('/reservations')
      },
      error => console.error(error))
  }
  // TODO handle error
}
