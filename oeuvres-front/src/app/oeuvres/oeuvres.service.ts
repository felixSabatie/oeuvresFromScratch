import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {OeuvreVente} from "../models/OeuvreVente";

@Injectable()
export class OeuvresService {

  constructor(private http: Http) {
  }

  getOeuvres(): Observable<OeuvreVente[]> {
    return this.http.get("http://localhost:8080/api/oeuvresvente").map(oeuvre => oeuvre.json())
  }
}
