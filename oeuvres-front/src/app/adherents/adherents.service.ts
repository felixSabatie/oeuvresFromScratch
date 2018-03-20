import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Adherent} from "../models/Adherent";
import "rxjs/add/operator/map";

@Injectable()
export class AdherentsService {

  constructor(private http: Http) {
  }

  getAdherents(): Observable<Adherent[]> {
    return this.http.get('http://localhost:8080/api/adherents')
      .map(adherent => adherent.json());
  }

}
