import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Adherent} from "../../models/Adherent";
import {AdherentsService} from "../adherents.service";

@Component({
  selector: 'adherent-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  adherent: Adherent;

  @Output()
  submit: EventEmitter<Adherent> = new EventEmitter<Adherent>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit(this.adherent);
  }

}
