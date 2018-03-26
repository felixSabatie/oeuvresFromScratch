import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reservation} from "../../models/Reservation";

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  @Input()
  private reservation: Reservation;

  @Output()
  private submit: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  constructor() { }

  ngOnInit() {
  }

  notifyCreate() {
    this.submit.emit(this.reservation);
  }

}
