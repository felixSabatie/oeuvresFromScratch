import {Reservation} from "./Reservation";

export class OeuvreVente {
  idOeuvrevente: number;
  titreOeuvrevente: string;
  etatOeuvrevente: string;
  prixOeuvrevente: number;
  reservations: Reservation[];
}
