import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
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
      .map(adherent => adherent.json());
  }

}
