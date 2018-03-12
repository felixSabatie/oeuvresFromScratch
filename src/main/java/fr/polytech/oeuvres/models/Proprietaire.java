package fr.polytech.oeuvres.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "proprietaire", schema = "oeuvres")
public class Proprietaire {

  private int idProprietaire;
  private String nomProprietaire;
  private String prenomProprietaire;
  private Set<OeuvrePret> oeuvresPret;

  @Id
  @Column(name = "id_proprietaire")
  public int getIdProprietaire() {
    return idProprietaire;
  }

  public void setIdProprietaire(int idProprietaire) {
    this.idProprietaire = idProprietaire;
  }

  @Basic
  @Column(name = "nom_proprietaire")
  public String getNomProprietaire() {
    return nomProprietaire;
  }

  public void setNomProprietaire(String nomProprietaire) {
    this.nomProprietaire = nomProprietaire;
  }

  @Basic
  @Column(name = "prenom_proprietaire")
  public String getPrenomProprietaire() {
    return prenomProprietaire;
  }

  public void setPrenomProprietaire(String prenomProprietaire) {
    this.prenomProprietaire = prenomProprietaire;
  }

  @JsonManagedReference
  @OneToMany(mappedBy = "proprietaire", cascade = CascadeType.ALL)
  public Set<OeuvrePret> getOeuvresPret() {
    return this.oeuvresPret;
  }

  public void setOeuvresPret(Set<OeuvrePret> oeuvresPret) {
    this.oeuvresPret = oeuvresPret;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Proprietaire that = (Proprietaire) o;
    return idProprietaire == that.idProprietaire &&
        Objects.equals(nomProprietaire, that.nomProprietaire) &&
        Objects.equals(prenomProprietaire, that.prenomProprietaire);
  }

  @Override
  public int hashCode() {

    return Objects.hash(idProprietaire, nomProprietaire, prenomProprietaire);
  }
}
