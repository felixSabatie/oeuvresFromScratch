import {Adherent} from "./Adherent";
import {OeuvreVente} from "./OeuvreVente";

export class Reservation {
  idReservation: number;
  idOeuvrevente: number;
  idAdherent: number;
  dateReservation: Date;
  statut: string;
  adherent: Adherent;
  oeuvreVente: OeuvreVente;
}
