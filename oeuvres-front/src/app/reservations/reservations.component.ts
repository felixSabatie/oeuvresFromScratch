import {Component, OnInit} from '@angular/core';
import {Reservation} from "../models/Reservation";
import {ReservationsService} from "./reservations.service";
import {OeuvresService} from "../oeuvres/oeuvres.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationsService: ReservationsService, private oeuvreService: OeuvresService) {
  }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(
      reservations => {
        reservations.forEach(reservation => {
          this.reservationsService.getAdherent(reservation);
          this.reservationsService.getOeuvre(reservation);
        });
        this.reservations = reservations;
      }, error => console.error(error)
    );
  }

  deleteReservation(reservation: Reservation) {
    if(window.confirm('Supprimer la réservation ' + reservation.idReservation + ' ?')) {

      this.reservationsService.deleteReservation(reservation).subscribe(
        success => {
          this.oeuvreService.getOeuvreById(reservation.idOeuvrevente).subscribe(
            oeuvre => {
              oeuvre.etatOeuvrevente = 'L';
              this.oeuvreService.editOeuvre(oeuvre).subscribe(
                oeuvre => {/* Do nothing */},
                error => console.error(error)
              );
            });
          this.reservations = this.reservations.filter(res => res.idReservation !== reservation.idReservation);
        }, error => console.error(error));
    }
  }

}
