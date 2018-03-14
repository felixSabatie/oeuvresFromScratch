package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.exceptions.ResourceNotFoundException;
import fr.polytech.oeuvres.models.Adherent;
import fr.polytech.oeuvres.models.Proprietaire;
import fr.polytech.oeuvres.repositories.ProprietaireRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProprietaireController extends Controller {

	private final ProprietaireRepository proprietaireRepository;

	@Autowired
	public ProprietaireController(ProprietaireRepository proprietaireRepository) {
		this.proprietaireRepository = proprietaireRepository;
	}

	@GetMapping("/proprietaires")
	public List<Proprietaire> getAllOeuvrePret() {
		return proprietaireRepository.findAll();
	}

	@GetMapping("/proprietaires/{id}")
	public Proprietaire getProprietaireById(@PathVariable(value = "id") int id) {
		return proprietaireRepository.findById(id).orElseThrow(
			() -> new ResourceNotFoundException("Proprietaire", "id", id)
		);
	}

	@PostMapping("/proprietaires")
	public Proprietaire createProprietaire(@Valid @RequestBody Proprietaire proprietaire){
		return proprietaireRepository.save(proprietaire);
	}

	@PutMapping("/proprietaires/{id}")
	public Proprietaire modifyProprietaire(@PathVariable(value = "id") int id, @
		Valid @RequestBody Proprietaire proprietairePayload) {
		Proprietaire proprietaire = proprietaireRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Adherent", "id", id));

		proprietaire.setNomProprietaire(proprietairePayload.getNomProprietaire());
		proprietaire.setPrenomProprietaire(proprietairePayload.getPrenomProprietaire());
		proprietaire.setOeuvresPret(proprietairePayload.getOeuvresPret());

		return proprietaireRepository.save(proprietaire);
	}
}
