const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	ingredientController.getAllIngredients
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	ingredientController.getOneIngredient
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Chef"]),
	ingredientController.postNewIngredient
);
router.put(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	ingredientController.updateOneIngredient
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Chef"]),
	ingredientController.deleteOneIngredient
);

module.exports = router;
