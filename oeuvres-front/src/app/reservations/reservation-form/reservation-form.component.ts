import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../models/Reservation";
import {OeuvresService} from "../../oeuvres/oeuvres.service";
import {AdherentsService} from "../../adherents/adherents.service";
import {OeuvreVente} from "../../models/OeuvreVente";
import {Adherent} from "../../models/Adherent";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  private reservationForm: FormGroup;

  constructor(private oeuvresService: OeuvresService, private adherentsService: AdherentsService) {
  }

  ngOnInit() {
    this.oeuvresService.getOeuvresFree().subscribe(
      oeuvres => this.oeuvres = oeuvres, error => console.error(error));
    this.adherentsService.getAdherents().subscribe(
      adherents => this.adherents = adherents, error => console.error(error));

    // Init form group
    this.reservationForm = new FormGroup({
      'adherentSelect': new FormControl(this.reservation.idAdherent, Validators.required),
      'oeuvreSelect': new FormControl(this.reservation.idOeuvrevente, Validators.required),
      'dateInput': new FormControl(this.reservation.dateReservation, Validators.required),
      'statutInput': new FormControl(this.reservation.statut, Validators.required)
    });
  }

  submitToParent() {
    this.submitReservation.emit(this.reservation);
  }

  displayForm(): boolean {
    return this.oeuvres != null && this.adherents != null && this.reservation != null;
  }

  get adherentSelect() {
    return this.reservationForm.get('adherentSelect');
  }

  get oeuvreSelect() {
    return this.reservationForm.get('oeuvreSelect');
  }

  get dateInput() {
    return this.reservationForm.get('dateInput');
  }

  get statutInput() {
    return this.reservationForm.get('statutInput');
  }

}
