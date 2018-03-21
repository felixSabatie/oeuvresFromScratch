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

}
