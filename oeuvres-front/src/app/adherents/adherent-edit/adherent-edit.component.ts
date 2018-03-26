import {Component, OnInit} from '@angular/core';
import {AdherentsService} from "../adherents.service";
import {Adherent} from "../../models/Adherent";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adherent-edit',
  templateUrl: './adherent-edit.component.html',
  styleUrls: ['./adherent-edit.component.scss']
})
export class AdherentEditComponent implements OnInit {

  private adherent: Adherent = new Adherent();
  private action: string = "Edit";

  constructor(private adherentService: AdherentsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.adherentService.getAdherentById(id).subscribe(
        adherent => this.adherent = adherent,
        error => console.error(error)
      );
    });
  }

  edit() {
    this.adherentService.editAdherent(this.adherent).subscribe(
      adherent => this.adherent = adherent,
      error => console.error(error)
    )
  }

}
