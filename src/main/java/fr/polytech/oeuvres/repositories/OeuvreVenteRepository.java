package fr.polytech.oeuvres.repositories;

import fr.polytech.oeuvres.models.OeuvreVente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OeuvreVenteRepository extends JpaRepository<OeuvreVente, Integer> {

}
