package fr.polytech.oeuvres.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.sql.Date;
import java.util.Objects;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reservation", schema = "oeuvres")
public class Reservation {

	private int idReservation;
	private int idOeuvrevente;
	private int idAdherent;
	private Date dateReservation;
	private String statut;
	private Adherent adherent;
	private OeuvreVente oeuvreVente;

	@Id
	@Column(name = "id_reservation")
	public int getIdReservation() {
		return idReservation;
	}

	public void setIdReservation(int idReservation) {
		this.idReservation = idReservation;
	}

	@Column(name = "id_oeuvrevente")
	public int getIdOeuvrevente() {
		return idOeuvrevente;
	}

	public void setIdOeuvrevente(int idOeuvrevente) {
		this.idOeuvrevente = idOeuvrevente;
	}

	@Column(name = "id_adherent")
	public int getIdAdherent() {
		return idAdherent;
	}

	public void setIdAdherent(int idAdherent) {
		this.idAdherent = idAdherent;
	}

	@Basic
	@Column(name = "date_reservation")
	public Date getDateReservation() {
		return dateReservation;
	}

	public void setDateReservation(Date dateReservation) {
		this.dateReservation = dateReservation;
	}

	@Basic
	@Column(name = "statut")
	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	// JsonBackReference pour chaque objet qui fait du ManyToOne et qu'on veut qu'il lazy load
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_adherent", insertable = false, updatable = false)
	public Adherent getAdherent() {
		return this.adherent;
	}

	public void setAdherent(Adherent adherent) {
		this.adherent = adherent;
	}

	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_oeuvrevente", insertable = false, updatable = false)
	public OeuvreVente getOeuvreVente() {
		return this.oeuvreVente;
	}

	public void setOeuvreVente(OeuvreVente oeuvreVente) {
		this.oeuvreVente = oeuvreVente;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Reservation that = (Reservation) o;
		return idOeuvrevente == that.idOeuvrevente &&
			idAdherent == that.idAdherent &&
			Objects.equals(dateReservation, that.dateReservation) &&
			Objects.equals(statut, that.statut);
	}

	@Override
	public int hashCode() {

		return Objects.hash(idOeuvrevente, idAdherent, dateReservation, statut);
	}
}
