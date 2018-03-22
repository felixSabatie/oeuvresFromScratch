import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {OeuvreVente} from "../models/OeuvreVente";
import {Env} from "../Env";

@Injectable()
export class OeuvresService {
  private static apiUrl = Env.API_URL + 'oeuvresvente';

  constructor(private http: Http) {
  }

  getOeuvres(): Observable<OeuvreVente[]> {
    return this.http.get(OeuvresService.apiUrl).map(oeuvre => oeuvre.json())
  }
}
