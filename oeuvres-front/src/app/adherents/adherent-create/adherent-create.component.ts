import { Component, OnInit } from '@angular/core';
import {Adherent} from "../../models/Adherent";
import {AdherentsService} from "../adherents.service";
import {Router} from "@angular/router";

@Component({
  selector: 'adherent-create',
  templateUrl: './adherent-create.component.html',
  styleUrls: ['./adherent-create.component.scss']
})
export class AdherentCreateComponent implements OnInit {

  private adherent: Adherent = new Adherent();
  private action: string = "Ajouter";

  constructor(private adherentService: AdherentsService, private router: Router) { }

  ngOnInit() {
  }

  post() {
    this.adherentService.addAdherent(this.adherent).subscribe(
      adherent => {
        this.adherent = adherent;
        this.router.navigateByUrl('/adherents')
          .catch(error => {
            console.error(error);
          });
      },
      error => console.error(error)
    );
  }

}
