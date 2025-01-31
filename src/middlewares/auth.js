const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;

		if (!authorizationHeader) {
			return res
				.status(401)
				.json({ message: "Pas de jetons d'authentification fourni" });
		} else {
			const token = authorizationHeader.split(" ")[1];
			const decodedToken = jwt.verify(token, process.env.SECRET_HASH);
			const userId = decodedToken.userId;

			req.auth = {
				userId: userId,
			};
			next();
		}
	} catch (error) {
		res.status(401).json({ error });
	}
};

module.exports.checkRoles = (allowedRoles) => {
	return (req, res, next) => {
		const userId = req.auth.userId;

		User.findById(userId)
			.populate("roleId")
			.then((user) => {
				if (!user) {
					return res.status(404).json({ message: "Utilisateur non trouvé" });
				}
				// Autoriser l'accès à l'administrateur pour toutes les pages
				if (
					user.roleId.name === "Admin" ||
					allowedRoles.includes(user.roleId.name)
				) {
					return next();
				}

				return res.status(403).json({ message: "Accès refusé" });
			})
			.catch((error) => res.status(500).json({ error }));
	};
};
