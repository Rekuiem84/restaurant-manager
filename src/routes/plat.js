const express = require("express");
const router = express.Router();
const platController = require("../controllers/platController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.getAllPlats
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.getOnePlat
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.postNewPlat
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.deleteOnePlat
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.updateOnePlat
);
// Obtenir les ingrédients d'un plat
router.get(
	"/:id/ingredients",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.getIngredientsOfPlat
);
// Obtenir tous les plats d'un type
router.get(
	"/type/:type",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.getAllPlatsOfType
);
// Obtenir les 3 plats les plus commandés durant le mois courant
router.get(
	"/popular",
	auth,
	auth.checkRoles(["Serveur", "Chef"]),
	platController.getPopularPlats
);

module.exports = router;
