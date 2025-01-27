const Roles = require("../models/Role");

exports.getAllRoles = (req, res, next) => {
	Roles.find()
		.then((roles) => res.status(200).json(roles))
		.catch((error) =>
			res.status(500).json({ message: "Erreur serveur", error })
		);
};

exports.getOneRole = (req, res, next) => {
	const { id } = req.params;
	Roles.findById(id)
		.then((role) => {
			if (!role) {
				return res.status(404).json({ message: "Rôle non trouvé" });
			}
			res.status(200).json(role);
		})
		.catch((error) =>
			res.status(500).json({ message: "Erreur serveur", error })
		);
};

exports.postNewRole = (req, res, next) => {
	const { name } = req.body;

	if (!name) {
		return res.status(400).json({ message: "Le nom du rôle est requis" });
	}

	const role = new Roles({ name });

	role
		.save()
		.then(() =>
			res.status(201).json({ message: "Le rôle vient d'être créé !" })
		)
		.catch((error) =>
			res.status(400).json({ message: "Erreur lors de la création", error })
		);
};

exports.updateOneRole = (req, res, next) => {
	const { id } = req.params;
	const { name } = req.body;

	if (!name) {
		return res.status(400).json({ message: "Le nom du rôle est requis" });
	}

	Roles.findByIdAndUpdate(id, { name }, { new: true })
		.then((updatedRole) => {
			if (!updatedRole) {
				return res.status(404).json({ message: "Rôle non trouvé" });
			}
			res.status(200).json(updatedRole);
		})
		.catch((error) =>
			res.status(400).json({ message: "Erreur lors de la mise à jour", error })
		);
};

exports.deleteOneRole = (req, res, next) => {
	const { id } = req.params;

	Roles.findByIdAndDelete(id)
		.then(() => res.status(200).json({ message: "Rôle supprimé !" }))
		.catch((error) =>
			res.status(400).json({ message: "Erreur lors de la suppression", error })
		);
};
