const Salles = require("../models/Salle");

exports.getAllSalles = (req, res, next) => {
	Salles.find()
		.then((salles) => res.status(200).json(salles))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOneSalle = (req, res, next) => {
	Salles.findOne({ _id: req.params.id })
		.then((salle) => {
			console.log(salle);
			res.status(200).json(salle);
		})
		.catch((error) => res.status(404).json({ error }));
};
exports.postNewSalle = (req, res, next) => {
	const salle = new Salles({
		...req.body, // On décompose toutes les données dans le req.body
	});
	salle
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "Le salle vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};
exports.updateOneSalle = (req, res, next) => {
	Salles.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Salle modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.deleteOneSalle = (req, res, next) => {
	Salles.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Salle supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
