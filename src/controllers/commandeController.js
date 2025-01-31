const Commandes = require("../models/Commande");

exports.getAllCommandes = (req, res, next) => {
	Commandes.find()
		.populate("plats.platId", "name") // Peupler les noms des plats
		.then((commandes) => res.status(200).json(commandes))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOneCommande = (req, res, next) => {
	Commandes.findOne({ _id: req.params.id })
		.populate("plats.platId", "name") // Peupler les noms des plats
		.then((commande) => {
			console.log(commande);
			res.status(200).json(commande);
		})
		.catch((error) => res.status(404).json({ error }));
};
exports.postNewCommande = (req, res, next) => {
	const commande = new Commandes({
		...req.body, // On décompose toutes les données dans le req.body
	});
	commande
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "Le commande vient d'être créée !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};
exports.updateOneCommande = (req, res, next) => {
	Commandes.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Commande modifiée !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.deleteOneCommande = (req, res, next) => {
	Commandes.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Commande supprimée !" }))
		.catch((error) => res.status(400).json({ error }));
};
// On récupère toutes les commandes à faire
exports.getAllCommandesToDo = (req, res, next) => {
	Commandes.find({ is_done: false })
		.populate("plats.platId", "name")
		.then((commandes) => res.status(200).json(commandes))
		.catch((error) => res.status(400).json({ error }));
};
