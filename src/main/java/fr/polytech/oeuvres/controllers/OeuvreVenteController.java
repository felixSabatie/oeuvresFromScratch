package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.exceptions.ResourceNotFoundException;
import fr.polytech.oeuvres.models.OeuvreVente;
import fr.polytech.oeuvres.repositories.OeuvreVenteRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OeuvreVenteController extends Controller {

	private final OeuvreVenteRepository oeuvreVenteRepository;

	@Autowired
	public OeuvreVenteController(OeuvreVenteRepository oeuvreVenteRepository) {
		this.oeuvreVenteRepository = oeuvreVenteRepository;
	}

	@RequestMapping("/oeuvresvente")
	public List<OeuvreVente> getAllOeuvresVente() {
		return oeuvreVenteRepository.findAll();
	}

	@PostMapping("/oeuvresvente")
	public OeuvreVente createOeuvreVente(@Valid @RequestBody OeuvreVente oeuvreVente) {
		return oeuvreVenteRepository.save(oeuvreVente);
	}

	@GetMapping("/oeuvresvente/{id}")
	public OeuvreVente getOeuvreVenteById(@PathVariable(value = "id") int oeuvrePretId) {
		return oeuvreVenteRepository.findById(oeuvrePretId).orElseThrow(
				() -> new ResourceNotFoundException("OeuvreVente", "id", oeuvrePretId)
		);
	}

	@PutMapping("/oeuvresvente/{id}")
	public OeuvreVente modifyOeuvreVente(@PathVariable(value = "id") int id,
			@Valid @RequestBody OeuvreVente oeuvreVentePayload) {

		OeuvreVente oeuvreVente = oeuvreVenteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("OeuvreVente", "id", id));

		oeuvreVente.setEtatOeuvrevente(oeuvreVentePayload.getEtatOeuvrevente());
		oeuvreVente.setPrixOeuvrevente(oeuvreVentePayload.getPrixOeuvrevente());
		oeuvreVente.setTitreOeuvrevente(oeuvreVentePayload.getTitreOeuvrevente());

		return oeuvreVenteRepository.save(oeuvreVente);
	}
}
