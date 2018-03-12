package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.models.Proprietaire;
import fr.polytech.oeuvres.repositories.ProprietaireRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProprietaireController extends Controller {

	private final ProprietaireRepository proprietaireRepository;

	@Autowired
	public ProprietaireController(ProprietaireRepository proprietaireRepository) {
		this.proprietaireRepository = proprietaireRepository;
	}

	@RequestMapping("/proprietaires")
	public List<Proprietaire> getAllOeuvrePret() {
		return proprietaireRepository.findAll();
	}
}
