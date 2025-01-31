const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commandeController");
const auth = require("../middlewares/auth.js");

// Obtenir toutes les commandes non terminées
router.get(
	"/todo",
	auth,
	auth.checkRoles(["Chef"]),
	commandeController.getAllCommandesToDo
);

router.get(
	"/",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	commandeController.getAllCommandes
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	commandeController.getOneCommande
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	commandeController.postNewCommande
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	commandeController.deleteOneCommande
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	commandeController.updateOneCommande
);

module.exports = router;
