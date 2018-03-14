package fr.polytech.oeuvres.controllers;

import fr.polytech.oeuvres.exceptions.ResourceNotFoundException;
import fr.polytech.oeuvres.models.Reservation;
import fr.polytech.oeuvres.repositories.ReservationRepository;
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
	public List<Reservation> getAllReservation() {
		return reservationRepository.findAll();
	}

	@GetMapping("/reservations/{id}")
	public Reservation getReservationById(@PathVariable(value = "id") int id) {
		return reservationRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Reservation", "id", id)
		);
	}

	@PostMapping("/reservations")
	public Reservation createReservation(@Valid @RequestBody Reservation reservation) {
		return reservationRepository.save(reservation);
	}

	@PutMapping("/reservations/{id}")
	public Reservation modifyReservation(@PathVariable(value = "id") int id, @
			Valid @RequestBody Reservation reservationPayload) {
		Reservation reservation = reservationRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Reservation", "id", id));

		reservation.setAdherent(reservationPayload.getAdherent());
		reservation.setOeuvreVente(reservationPayload.getOeuvreVente());
		reservation.setDateReservation(reservationPayload.getDateReservation());
		reservation.setStatut(reservationPayload.getStatut());

		return reservationRepository.save(reservation);
	}

	@DeleteMapping("/reservations/{id}")
	public ResponseEntity<?> deleteReservation(@PathVariable(value = "id") int id) {
		Reservation reservation = reservationRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Reservation", "id", id)
		);

		reservationRepository.delete(reservation);

		return ResponseEntity.ok().build();
	}
}
