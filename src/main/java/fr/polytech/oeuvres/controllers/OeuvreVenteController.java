package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.models.OeuvreVente;
import fr.polytech.oeuvres.repositories.OeuvreVenteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OeuvreVenteController extends Controller {

	private final OeuvreVenteRepository oeuvreVenteRepository;

	@Autowired
	public OeuvreVenteController(OeuvreVenteRepository oeuvreVenteRepository) {
		this.oeuvreVenteRepository = oeuvreVenteRepository;
	}

	@RequestMapping("/oeuvreventes")
	public List<OeuvreVente> getAllOeuvrePret() {
		return oeuvreVenteRepository.findAll();
	}
}
