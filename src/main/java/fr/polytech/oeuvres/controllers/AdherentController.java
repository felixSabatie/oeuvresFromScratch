package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.exceptions.ResourceNotFoundException;
import fr.polytech.oeuvres.models.Adherent;
import fr.polytech.oeuvres.repositories.AdherentRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdherentController extends Controller {

	private final AdherentRepository adherentRepository;

	@Autowired
	public AdherentController(AdherentRepository adherentRepository) {
		this.adherentRepository = adherentRepository;
	}

	@GetMapping("/adherents")
	public List<Adherent> getAllAdherent() {
		return adherentRepository.findAll();
	}

	@PostMapping("/adherents")
	public Adherent createAdherent(@Valid @RequestBody Adherent adherent) {
		return adherentRepository.save(adherent);
	}

	@GetMapping("/adherents/{id}")
	public Adherent getAdherentById(@PathVariable(value = "id") int adherentId) {
		return adherentRepository.findById(adherentId).orElseThrow(
			() -> new ResourceNotFoundException("Adherent", "id", adherentId)
		);
	}

	@PutMapping("/adherents/{id}")
	public Adherent modifyAdherent(@PathVariable(value = "id") int id,
													@Valid @RequestBody Adherent adherentPayload) {

		Adherent adherent = adherentRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Adherent", "id", id));

		adherent.setNomAdherent(adherentPayload.getNomAdherent());
		adherent.setPrenomAdherent(adherentPayload.getPrenomAdherent());
		adherent.setVilleAdherent(adherentPayload.getVilleAdherent());

		return adherentRepository.save(adherent);
	}

	@DeleteMapping("/adherents/{id}")
	public ResponseEntity<?> deleteAdherent(@PathVariable(value = "id") int id) {
		Adherent adherent = adherentRepository.findById(id).orElseThrow(
			() -> new ResourceNotFoundException("Adherent", "id", id)
		);

		adherentRepository.delete(adherent);

		return ResponseEntity.ok().build();

	}
}
