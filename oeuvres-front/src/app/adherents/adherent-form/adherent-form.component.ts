import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Adherent} from "../../models/Adherent";
import {Router} from "@angular/router";

@Component({
  selector: 'adherent-form',
  templateUrl: './adherent-form.component.html',
  styleUrls: ['./adherent-form.component.scss']
})
export class AdherentFormComponent implements OnInit {

  @Input()
  adherent: Adherent;

  @Input()
  action: String;

  @Output()
  emitter: EventEmitter<Adherent> = new EventEmitter<Adherent>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.emitter.emit(this.adherent);
  }

}
