const Plats = require("../models/Plat");

exports.getAllPlats = (req, res, next) => {
	Plats.find()
		.then((plats) => res.status(200).json(plats))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOnePlat = (req, res, next) => {
	Plats.findOne({ _id: req.params.id })
		.then((plat) => {
			console.log(plat);
			res.status(200).json({
				name: plat.name,
				price: plat.price,
				type: plat.type,
			});
		})
		.catch((error) => res.status(404).json({ error }));
};
exports.postNewPlat = (req, res, next) => {
	const plat = new Plats({
		...req.body, // On décompose toutes les données dans le req.body
	});
	plat
		.save() // On enregistre dans la BDD
		.then(() =>
			res.status(201).json({ message: "Le plat vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};
exports.updateOnePlat = (req, res, next) => {
	Plats.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Plat modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.deleteOnePlat = (req, res, next) => {
	Plats.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Plat supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
exports.getIngredientsOfPlat = (req, res, next) => {
	Plats.findOne({ _id: req.params.id })
		.populate("ingredients")
		.then((plat) => res.status(200).json(plat.ingredients))
		.catch((error) => res.status(404).json({ error }));
};
exports.getAllPlatsOfType = (req, res, next) => {
	console.log(req.params.type);
	Plats.find({ type: req.params.type })
		.then((plats) => res.status(200).json(plats))
		.catch((error) => res.status(400).json({ error }));
};
exports.getPopularPlats = (req, res, next) => {};
