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
@Table(name = "oeuvrevente", schema = "oeuvres")
public class OeuvreVente {

	private int idOeuvrevente;
	private String titreOeuvrevente;
	private String etatOeuvrevente;
	private double prixOeuvrevente;
	private Set<Reservation> reservations;

	@Id
	@Column(name = "id_oeuvrevente")
	public int getIdOeuvrevente() {
		return idOeuvrevente;
	}

	public void setIdOeuvrevente(int idOeuvrevente) {
		this.idOeuvrevente = idOeuvrevente;
	}

	@Basic
	@Column(name = "titre_oeuvrevente")
	public String getTitreOeuvrevente() {
		return titreOeuvrevente;
	}

	public void setTitreOeuvrevente(String titreOeuvrevente) {
		this.titreOeuvrevente = titreOeuvrevente;
	}

	@Basic
	@Column(name = "etat_oeuvrevente")
	public String getEtatOeuvrevente() {
		return etatOeuvrevente;
	}

	public void setEtatOeuvrevente(String etatOeuvrevente) {
		this.etatOeuvrevente = etatOeuvrevente;
	}

	@Basic
	@Column(name = "prix_oeuvrevente")
	public double getPrixOeuvrevente() {
		return prixOeuvrevente;
	}

	public void setPrixOeuvrevente(double prixOeuvrevente) {
		this.prixOeuvrevente = prixOeuvrevente;
	}

  @JsonManagedReference(value = "oeuvreVente-reservation")
  @OneToMany(mappedBy = "oeuvreVente", cascade = CascadeType.ALL)
  public Set<Reservation> getReservations() {
    return this.reservations;
  }

	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		OeuvreVente that = (OeuvreVente) o;
		return idOeuvrevente == that.idOeuvrevente &&
			Double.compare(that.prixOeuvrevente, prixOeuvrevente) == 0 &&
			Objects.equals(titreOeuvrevente, that.titreOeuvrevente) &&
			Objects.equals(etatOeuvrevente, that.etatOeuvrevente);
	}

	@Override
	public int hashCode() {

		return Objects.hash(idOeuvrevente, titreOeuvrevente, etatOeuvrevente, prixOeuvrevente);
	}
}
