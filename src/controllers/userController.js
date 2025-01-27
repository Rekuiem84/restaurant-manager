const Users = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

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
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new Users({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: hash,
				roleId: req.body.roleId,
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
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

exports.loginUser = (req, res, next) => {
	Users.findOne({ email: req.body.email })
		.then((user) => {
			if (user === null) {
				res.status(401).json({ message: "Email ou mot de passe incorrects" });
			} else {
				bcrypt
					.compare(req.body.password, user.password)
					.then((valid) => {
						if (!valid) {
							res
								.status(401)
								.json({ message: "Email ou mot de passe incorrects" });
						} else {
							res.status(200).json({
								userId: user._id,
								token: jwt.sign({ userId: user._id }, process.env.SECRET_HASH, {
									expiresIn: "24h",
								}),
							});
						}
					})
					.catch((error) => res.status(500).json({ error }));
			}
		})
		.catch((error) => res.status(500).json({ error }));
};
