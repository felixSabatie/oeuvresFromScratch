import {Component, OnInit} from '@angular/core';
import {Adherent} from "../models/Adherent";
import {AdherentsService} from "./adherents.service";

@Component({
  selector: 'app-adherents',
  templateUrl: './adherents.component.html',
  styleUrls: ['./adherents.component.scss']
})
export class AdherentsComponent implements OnInit {
  adherents: Adherent[];

  constructor(private adherentsService: AdherentsService) {
  }

  ngOnInit() {
    this.adherentsService.getAdherents().subscribe(
      adherents => this.adherents = adherents,
      error => console.error(error));
  }

}
