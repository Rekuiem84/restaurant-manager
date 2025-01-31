const express = require("express");
const router = express.Router();
const recetteController = require("../controllers/recetteController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	recetteController.getAllRecettes
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	recetteController.getOneRecette
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	recetteController.postNewRecette
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	recetteController.deleteOneRecette
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	recetteController.updateOneRecette
);

module.exports = router;
