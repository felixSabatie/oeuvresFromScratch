import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Adherent} from "../models/Adherent";
import "rxjs/add/operator/map";
import {Env} from "../Env";

@Injectable()
export class AdherentsService {
  private static apiUrl = Env.API_URL + 'adherents';

  constructor(private http: Http) {
  }

  getAdherents(): Observable<Adherent[]> {
    return this.http.get(AdherentsService.apiUrl)
      .map(adherents => adherents.json());
  }

  addAdherent(adherent: Adherent): Observable<Adherent> {
    return this.http.post(AdherentsService.apiUrl, adherent)
      .map(adherent => adherent.json())
  }

  editAdherent(adherent: Adherent): Observable<Adherent> {
    return this.http.put(AdherentsService.apiUrl + "/" + adherent.idAdherent, adherent)
      .map(adh => adh.json())
  }

  getAdherentById(id: number): Observable<Adherent> {
    return this.http.get(AdherentsService.apiUrl + "/" + id)
      .map(adherent => adherent.json())
  }

  deleteAdherent(adherent: Adherent | number): Observable<Response> {
    const id = typeof adherent === 'number' ? adherent : adherent.idAdherent;
    return this.http.delete(AdherentsService.apiUrl + "/" + id)
  }
}
