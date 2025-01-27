const express = require("express");
const router = express.Router();
const recetteController = require("../controllers/recetteController");

router.get("/", recetteController.getAllRecettes);
router.get("/:id", recetteController.getOneRecette);
router.post("/", recetteController.postNewRecette);
router.delete("/:id", recetteController.deleteOneRecette);
router.patch("/:id", recetteController.updateOneRecette);

module.exports = router;
