package fr.polytech.oeuvres.models;

import java.util.Objects;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oeuvrepret", schema = "oeuvres")
public class OeuvrePret {

  private int idOeuvrepret;
  private String titreOeuvrepret;

  @Id
  @Column(name = "id_oeuvrepret")
  public int getIdOeuvrepret() {
    return idOeuvrepret;
  }

  public void setIdOeuvrepret(int idOeuvrepret) {
    this.idOeuvrepret = idOeuvrepret;
  }

  @Basic
  @Column(name = "titre_oeuvrepret")
  public String getTitreOeuvrepret() {
    return titreOeuvrepret;
  }

  public void setTitreOeuvrepret(String titreOeuvrepret) {
    this.titreOeuvrepret = titreOeuvrepret;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OeuvrePret that = (OeuvrePret) o;
    return idOeuvrepret == that.idOeuvrepret &&
        Objects.equals(titreOeuvrepret, that.titreOeuvrepret);
  }

  @Override
  public int hashCode() {

    return Objects.hash(idOeuvrepret, titreOeuvrepret);
  }
}
