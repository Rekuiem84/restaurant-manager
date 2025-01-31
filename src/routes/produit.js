const express = require("express");
const router = express.Router();
const produitController = require("../controllers/produitController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	produitController.getAllProduits
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	produitController.getOneProduit
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	produitController.postNewProduit
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	produitController.deleteOneProduit
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	produitController.updateOneProduit
);

module.exports = router;
