package fr.polytech.oeuvres.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "adherent", schema = "oeuvres")
@EntityListeners(AuditingEntityListener.class)
public class Adherent implements Serializable {

	private int idAdherent;
	private String nomAdherent;
	private String prenomAdherent;
	private String villeAdherent;
	private Set<Reservation> reservations;

	@Id
	@Column(name = "id_adherent")
	public int getIdAdherent() {
		return idAdherent;
	}

	public void setIdAdherent(int idAdherent) {
		this.idAdherent = idAdherent;
	}

	@Basic
	@Column(name = "nom_adherent")
	public String getNomAdherent() {
		return nomAdherent;
	}

	public void setNomAdherent(String nomAdherent) {
		this.nomAdherent = nomAdherent;
	}

	@Basic
	@Column(name = "prenom_adherent")
	public String getPrenomAdherent() {
		return prenomAdherent;
	}

	public void setPrenomAdherent(String prenomAdherent) {
		this.prenomAdherent = prenomAdherent;
	}

	@Basic
	@Column(name = "ville_adherent")
	public String getVilleAdherent() {
		return villeAdherent;
	}

	public void setVilleAdherent(String villeAdherent) {
		this.villeAdherent = villeAdherent;
	}

	// JsonManagedReference pour chaque objet qui fait du OneToMany et qui load tout
	@JsonManagedReference
	@JsonIgnore
	@OneToMany(mappedBy = "adherent", cascade = CascadeType.ALL)
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
		Adherent that = (Adherent) o;
		return idAdherent == that.idAdherent &&
			Objects.equals(nomAdherent, that.nomAdherent) &&
			Objects.equals(prenomAdherent, that.prenomAdherent) &&
			Objects.equals(villeAdherent, that.villeAdherent);
	}

	@Override
	public int hashCode() {

		return Objects.hash(idAdherent, nomAdherent, prenomAdherent, villeAdherent);
	}
}
