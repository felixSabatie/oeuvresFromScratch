import { Component, OnInit } from '@angular/core';
import {OeuvresService} from "../oeuvres.service";
import {Router} from "@angular/router";
import {OeuvreVente} from "../../models/OeuvreVente";

@Component({
  selector: 'oeuvre-create',
  templateUrl: './oeuvres-create.component.html',
  styleUrls: ['./oeuvres-create.component.scss']
})
export class OeuvresCreateComponent implements OnInit {

  private oeuvre: OeuvreVente = new OeuvreVente();
  private action: string = "Ajouter";

  constructor(private oeuvreService: OeuvresService, private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.oeuvreService.addOeuvre(this.oeuvre).subscribe(
      oeuvre => {
        console.log(oeuvre);
        this.oeuvre = oeuvre;
        this.router.navigateByUrl('/oeuvres')
          .catch(error => {
            console.error(error);
          });

      },
      error => console.error(error)
    );
  }
}
