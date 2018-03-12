package fr.polytech.oeuvres.repositories;

import fr.polytech.oeuvres.models.Proprietaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProprietaireRepository extends JpaRepository<Proprietaire, Integer> {

}
