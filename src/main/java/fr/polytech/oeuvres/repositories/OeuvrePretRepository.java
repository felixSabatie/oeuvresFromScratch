package fr.polytech.oeuvres.repositories;

import fr.polytech.oeuvres.models.OeuvrePret;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OeuvrePretRepository extends JpaRepository<OeuvrePret, Long> {

}
