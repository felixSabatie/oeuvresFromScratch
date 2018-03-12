package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.models.Reservation;
import fr.polytech.oeuvres.repositories.ReservationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController extends Controller {

	private final ReservationRepository reservationRepository;

	@Autowired
	public ReservationController(ReservationRepository reservationRepository) {
		this.reservationRepository = reservationRepository;
	}

	@RequestMapping("/reservations")
	public List<Reservation> getAllOeuvrePret() {
		return reservationRepository.findAll();
	}
}
