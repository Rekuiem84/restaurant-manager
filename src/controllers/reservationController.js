const Reservations = require("../models/Reservation");

exports.getAllReservations = (req, res, next) => {
	Reservations.find()
		.then((reservations) => res.status(200).json(reservations))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOneReservation = (req, res, next) => {
	Reservations.findOne({ _id: req.params.id })
		.then((reservation) => {
			console.log(reservation);
			res.status(200).json({
				dateTime: reservation.dateTime,
				client_name: reservation.client_name,
				nb_tables: reservation.nb_tables,
				seatings: reservation.seatings,
			});
		})
		.catch((error) => res.status(404).json({ error }));
};
exports.postNewReservation = (req, res, next) => {
	const reservation = new Reservations({
		...req.body, // On décompose toutes les données dans le req.body
	});
	reservation
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "Le reservation vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};
exports.updateOneReservation = (req, res, next) => {
	Reservations.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Reservation modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.deleteOneReservation = (req, res, next) => {
	Reservations.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Reservation supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.getReservationsByDay = (req, res, next) => {
	Reservations.find({ dateTime: req.params.date })
		.then((reservations) => res.status(200).json(reservations))
		.catch((error) => res.status(400).json({ error }));
};
