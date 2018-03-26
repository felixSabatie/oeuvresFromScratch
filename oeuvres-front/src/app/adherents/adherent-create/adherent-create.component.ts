import { Component, OnInit } from '@angular/core';
import {Adherent} from "../../models/Adherent";
import {AdherentsService} from "../adherents.service";

@Component({
  selector: 'app-create',
  templateUrl: './adherent-create.component.html',
  styleUrls: ['./adherent-create.component.scss']
})
export class AdherentCreateComponent implements OnInit {

  private adherent: Adherent = new Adherent();
  private action: string = "Add";

  constructor(private adherentService: AdherentsService) { }

  ngOnInit() {
  }

  post() {
    this.adherentService.addAdherents(this.adherent).subscribe(
      adherent => this.adherent = adherent,
      error => console.error(error)
    );
  }

}
