import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Adherent} from "../../models/Adherent";
import {OeuvreVente} from "../../models/OeuvreVente";

@Component({
  selector: 'oeuvre-form',
  templateUrl: './oeuvres-form.component.html',
  styleUrls: ['./oeuvres-form.component.scss']
})
export class OeuvresFormComponent implements OnInit {

  @Input()
  oeuvre: OeuvreVente;

  @Input()
  action: String;

  @Output()
  emitter: EventEmitter<OeuvreVente> = new EventEmitter<OeuvreVente>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.emitter.emit(this.oeuvre);
  }
}
