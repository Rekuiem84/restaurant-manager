const Ingredients = require("../models/Ingredient");

exports.getAllIngredients = (req, res, next) => {
	Ingredients.find()
		.populate("produitId", "name") // Peupler le champ produitId avec le nom du produit
		.then((ingredients) => res.status(200).json(ingredients))
		.catch((error) => res.status(400).json({ error }));
};

exports.getOneIngredient = (req, res, next) => {
	Ingredients.findOne({ _id: req.params.id })
		.populate("produitId", "name") // Peupler le champ produitId avec le nom du produit
		.then((ingredient) => {
			console.log(ingredient);
			res.status(200).json(ingredient);
		})
		.catch((error) => res.status(404).json({ error }));
};

exports.postNewIngredient = (req, res, next) => {
	const ingredient = new Ingredients({
		...req.body, // On décompose toutes les données dans le req.body
	});
	ingredient
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "L'ingrédient vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};

exports.updateOneIngredient = (req, res, next) => {
	Ingredients.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Ingrédient modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteOneIngredient = (req, res, next) => {
	Ingredients.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Ingrédient supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
