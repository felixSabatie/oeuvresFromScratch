package fr.polytech.oeuvres.repositories;

import fr.polytech.oeuvres.models.Adherent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdherentRepository extends JpaRepository<Adherent, Integer> {

}
