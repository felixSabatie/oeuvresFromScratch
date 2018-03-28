import {Component, OnInit} from '@angular/core';
import {OeuvresService} from "../oeuvres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OeuvreVente} from "../../models/OeuvreVente";

@Component({
  selector: 'app-oeuvres-edit',
  templateUrl: './oeuvres-edit.component.html',
  styleUrls: ['./oeuvres-edit.component.scss']
})
export class OeuvresEditComponent implements OnInit {

  private oeuvre: OeuvreVente = new OeuvreVente();
  private action: string ="Edit";

  constructor(private oeuvreService: OeuvresService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.oeuvreService.getOeuvreById(id).subscribe(
        oeuvre => this.oeuvre = oeuvre,
        error => console.error(error)
      );
    });
  }

  edit() {
    console.log(this.oeuvre);
    this.oeuvreService.editOeuvre(this.oeuvre).subscribe(
      oeuvre => {
        this.oeuvre = oeuvre;
        this.router.navigateByUrl('/oeuvres')
        .catch(error => {
          console.error(error);
        });
      },
      error => console.error(error)
    )
  }
}
