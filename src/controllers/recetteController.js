const Recettes = require("../models/Recette");

exports.getAllRecettes = (req, res, next) => {
	Recettes.find()
		.populate({
			path: "ingredients.ingredientId",
			populate: {
				path: "produitId",
				select: "name",
			},
		})
		.populate("platId", "name")
		.then((recettes) => res.status(200).json(recettes))
		.catch((error) => res.status(400).json({ error }));
};

exports.getOneRecette = (req, res, next) => {
	Recettes.findOne({ _id: req.params.id })
		.populate({
			path: "ingredients.ingredientId",
			populate: {
				path: "produitId",
				select: "name",
			},
		})
		.populate("platId", "name")
		.then((recette) => {
			console.log(recette);
			res.status(200).json(recette);
		})
		.catch((error) => res.status(404).json({ error }));
};

exports.postNewRecette = (req, res, next) => {
	const recette = new Recettes({
		...req.body,
	});
	recette
		.save()
		.then(() =>
			res.status(201).json({ message: "Le recette vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};

exports.updateOneRecette = (req, res, next) => {
	Recettes.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Recette modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteOneRecette = (req, res, next) => {
	Recettes.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Recette supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
