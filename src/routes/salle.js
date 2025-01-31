const express = require("express");
const router = express.Router();
const salleController = require("../controllers/salleController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	salleController.getAllSalles
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	salleController.getOneSalle
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	salleController.postNewSalle
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	salleController.deleteOneSalle
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	salleController.updateOneSalle
);

module.exports = router;
