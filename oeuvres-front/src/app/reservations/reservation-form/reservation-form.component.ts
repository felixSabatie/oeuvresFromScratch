import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {OeuvresService} from "../../oeuvres/oeuvres.service";
import {AdherentsService} from "../../adherents/adherents.service";
import {OeuvreVente} from "../../models/OeuvreVente";
import {Adherent} from "../../models/Adherent";

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  @Input()
  private reservation: Reservation;

  @Output()
  private submitReservation: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  private oeuvres: OeuvreVente[];
  private adherents: Adherent[];

  constructor(private oeuvresService: OeuvresService, private adherentsService: AdherentsService) {
  }

  ngOnInit() {
    this.oeuvresService.getOeuvres().subscribe(
      oeuvres => this.oeuvres = oeuvres, error => console.error(error));
    this.adherentsService.getAdherents().subscribe(
      adherents => this.adherents = adherents, error => console.error(error));
  }

  submitToParent() {
    this.submitReservation.emit(this.reservation);
  }

  displayForm(): boolean {
    return this.reservation != null && this.adherents != null && this.reservation != null;
  }

}
