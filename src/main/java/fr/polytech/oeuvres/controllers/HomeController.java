package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.models.Adherent;
import fr.polytech.oeuvres.repositories.AdherentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
  private final AdherentRepository adherentRepository;

  @Autowired
  public HomeController(AdherentRepository adherentRepository) {
    this.adherentRepository = adherentRepository;
  }

  @RequestMapping("/home")
  public List<Adherent> home() {
    return adherentRepository.findAll();
  }
}
