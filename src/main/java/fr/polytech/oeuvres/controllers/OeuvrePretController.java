package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.exceptions.ResourceNotFoundException;
import fr.polytech.oeuvres.models.OeuvrePret;
import fr.polytech.oeuvres.repositories.OeuvrePretRepository;
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
public class OeuvrePretController extends Controller {

	private OeuvrePretRepository oeuvrePretRepository;

	@Autowired
	public OeuvrePretController(OeuvrePretRepository oeuvrePretRepository) {
		this.oeuvrePretRepository = oeuvrePretRepository;
	}

	@RequestMapping("/oeuvrespret")
	public List<OeuvrePret> getAllOeuvrePret() {
		return oeuvrePretRepository.findAll();
	}

	@PostMapping("/oeuvrespret")
	public OeuvrePret createOeuvrePret(@Valid @RequestBody OeuvrePret oeuvrePret) {
		return oeuvrePretRepository.save(oeuvrePret);
	}

	@GetMapping("/oeuvrespret/{id}")
	public OeuvrePret getOeuvrePretById(@PathVariable(value = "id") int oeuvrePretId) {
		return oeuvrePretRepository.findById(oeuvrePretId).orElseThrow(
				() -> new ResourceNotFoundException("OeuvrePret", "id", oeuvrePretId)
		);
	}

	@PutMapping("/oeuvrespret/{id}")
	public OeuvrePret modifyOeuvrePret(@PathVariable(value = "id") int id,
			@Valid @RequestBody OeuvrePret oeuvrePretPayload) {

		OeuvrePret oeuvrePret = oeuvrePretRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("OeuvrePret", "id", id));

		oeuvrePret.setProprietaire(oeuvrePretPayload.getProprietaire());
		oeuvrePret.setTitreOeuvrepret(oeuvrePretPayload.getTitreOeuvrepret());

		return oeuvrePretRepository.save(oeuvrePret);
	}
}
