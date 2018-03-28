import {Component, OnInit} from '@angular/core';
import {OeuvresService} from "./oeuvres.service";
import {OeuvreVente} from "../models/OeuvreVente";

@Component({
  selector: 'app-oeuvres',
  templateUrl: './oeuvres.component.html',
  styleUrls: ['./oeuvres.component.scss']
})
export class OeuvresComponent implements OnInit {

  oeuvres: OeuvreVente[];

  constructor(private oeuvreService: OeuvresService) {
  }

  ngOnInit() {
    this.oeuvreService.getOeuvres()
      .subscribe(oeuvres => this.oeuvres = oeuvres)
  }

  delete(oeuvre : OeuvreVente){
    const message = "Confirmer la suppresion de " + oeuvre.titreOeuvrevente;
    const result = confirm(message);
    if(result) {
      this.oeuvres = this.oeuvres.filter(oe => oe !== oeuvre);
      this.oeuvreService.deleteOeuvre(oeuvre.idOeuvrevente).subscribe(
        oeuvre => {/* Nothing to do here */
        },
        error => console.error(error)
      );
    }
  }
}
