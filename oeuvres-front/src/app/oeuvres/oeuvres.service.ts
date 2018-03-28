import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {OeuvreVente} from "../models/OeuvreVente";
import {Env} from "../Env";
import {Adherent} from "../models/Adherent";
import {AdherentsService} from "../adherents/adherents.service";

@Injectable()
export class OeuvresService {
  private static apiUrl = Env.API_URL + 'oeuvresvente';

  constructor(private http: Http) {
  }

  getOeuvres(): Observable<OeuvreVente[]> {
    return this.http.get(OeuvresService.apiUrl).map(oeuvre => oeuvre.json())
  }

  addOeuvre(oeuvre: OeuvreVente) : Observable<OeuvreVente> {
    return this.http.post(OeuvresService.apiUrl + "/", oeuvre)
      .map(oeuv => oeuv.json())
  }

  editOeuvre(oeuvre: OeuvreVente): Observable<OeuvreVente> {
    return this.http.get(OeuvresService.apiUrl + "/" + oeuvre.idOeuvrevente, oeuvre)
      .map(oeuv => oeuv.json())
  }

  getOeuvreById(id: number): Observable<OeuvreVente> {
    return this.http.get(OeuvresService.apiUrl + "/" + id)
    .map(oeuvre => oeuvre.json())
  }

  deleteOeuvre(oeuvre: OeuvreVente | number): Observable<Response> {
    const id = typeof oeuvre === 'number' ? oeuvre : oeuvre.idOeuvrevente;
    return this.http.delete(OeuvresService.apiUrl + "/" + id)
  }


}
