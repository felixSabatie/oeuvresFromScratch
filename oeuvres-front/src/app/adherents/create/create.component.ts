import { Component, OnInit } from '@angular/core';
import {Adherent} from "../../models/Adherent";
import {AdherentsService} from "../adherents.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private adherent: Adherent = new Adherent();

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
