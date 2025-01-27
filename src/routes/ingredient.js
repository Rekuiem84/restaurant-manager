const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

router.get("/", ingredientController.getAllIngredients);
router.get("/:id", ingredientController.getOneIngredient);
router.post("/", ingredientController.postNewIngredient);
router.put("/:id", ingredientController.updateOneIngredient);
router.delete("/:id", ingredientController.deleteOneIngredient);

module.exports = router;
