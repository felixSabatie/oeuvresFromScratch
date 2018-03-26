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

  delete(adherent: Adherent){
    this.adherents = this.adherents.filter(ad => ad !== adherent);
    this.adherentsService.deleteAdherent(adherent.idAdherent).subscribe(
      adherent => {/* Nothing to do here */},
      error => console.error(error)
    );
  }
}
