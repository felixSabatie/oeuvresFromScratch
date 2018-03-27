import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../../models/Reservation";
import {ReservationsService} from "../reservations.service";

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})
export class ReservationEditComponent implements OnInit {
  private reservation: Reservation;
  private error: boolean = false;

  constructor(private route: ActivatedRoute, private reservationsService: ReservationsService,
              private router: Router) {
  }

  ngOnInit() {
    let reservationId = this.route.snapshot.params['id'];
    this.reservationsService.getReservation(reservationId).subscribe(
      reservation => this.reservation = reservation,
      error => {
        console.error(error);
        this.error = true;
      }
    );
  }

  editReservation() {
    this.reservationsService.editReservation(this.reservation).subscribe(
      reservation => this.router.navigateByUrl('/reservations'), error => console.error(error)
    );
  }

}
