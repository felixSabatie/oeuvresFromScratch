package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.models.OeuvrePret;
import fr.polytech.oeuvres.repositories.OeuvrePretRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OeuvrePretController extends Controller {

	private OeuvrePretRepository oeuvrePretRepository;

	@Autowired
	public OeuvrePretController(OeuvrePretRepository oeuvrePretRepository) {
		this.oeuvrePretRepository = oeuvrePretRepository;
	}

	@RequestMapping("/oeuvreprets")
	public List<OeuvrePret> getAllOeuvrePret() {
		return oeuvrePretRepository.findAll();
	}
}
