const Users = require("../models/User");

exports.getAllUsers = (req, res, next) => {
	Users.find()
		.populate("roleId", "name")
		.then((users) => res.status(200).json(users))
		.catch((error) => res.status(400).json({ error }));
};
exports.getOneUser = (req, res, next) => {
	Users.findById(req.params.id)
		.populate("roleId", "name") // Populate the 'roleId' field and only return the 'name'
		.then((user) => {
			if (!user) {
				return res.status(404).json({ message: "User non trouvé" });
			}
			res.status(200).json({ user });
		})
		.catch((error) => {
			res.status(400).json({ error });
		});
};
exports.postNewUser = (req, res, next) => {
	const { first_name, last_name, email, password, roleId } = req.body;
	console.log(req.body);

	// Vérifier que tous les champs obligatoires sont fournis
	if (!first_name || !last_name || !email || !password || !roleId) {
		return res
			.status(400)
			.json({ message: "Tous les champs sont obligatoires." });
	}

	const user = new Users({
		first_name,
		last_name,
		email,
		password, // Utilisation du mot de passe sans hachage
		roleId,
	});

	user
		.save()
		.then(() =>
			res.status(201).json({ message: "Le user vient d'être créé !" })
		)
		.catch((error) => res.status(400).json({ error: error }));
};

exports.updateOneUser = (req, res, next) => {
	const updates = { ...req.body };

	// Ne pas autoriser la modification de l'id
	if (updates._id) {
		delete updates._id;
	}

	Users.updateOne({ _id: req.params.id }, { $set: updates }) // On utilise $set pour une mise à jour partielle
		.then((result) => {
			if (result.nModified === 0) {
				return res.status(404).json({
					message: "Utilisateur non trouvé ou aucune modification effectuée.",
				});
			}
			res.status(200).json({ message: "Utilisateur modifié !" });
		})
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteOneUser = (req, res, next) => {
	Users.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "User supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};
