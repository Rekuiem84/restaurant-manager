const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");
const auth = require("../middlewares/auth.js");

router.get("/", ingredientController.getAllIngredients);
router.get("/:id", ingredientController.getOneIngredient);
router.post("/", auth, ingredientController.postNewIngredient);
router.put("/:id", auth, ingredientController.updateOneIngredient);
router.delete("/:id", auth, ingredientController.deleteOneIngredient);

module.exports = router;
