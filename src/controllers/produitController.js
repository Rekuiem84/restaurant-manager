const Produits = require("../models/Produit");

exports.getAllProduits = (req, res, next) => {
	Produits.find()
		.then((produits) => res.status(200).json(produits))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOneProduit = (req, res, next) => {
	Produits.findOne({ _id: req.params.id })
		.then((produit) => {
			console.log(produit);
			res.status(200).json(produit);
		})
		.catch((error) => res.status(404).json({ error }));
};
exports.postNewProduit = (req, res, next) => {
	const produit = new Produits({
		...req.body, // On décompose toutes les données dans le req.body
	});
	produit
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "Le produit vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};
exports.updateOneProduit = (req, res, next) => {
	Produits.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Produit modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.deleteOneProduit = (req, res, next) => {
	Produits.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Produit supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
