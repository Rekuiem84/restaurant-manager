const express = require("express");
const router = express.Router();
const recetteController = require("../controllers/recetteController");
const auth = require("../middlewares/auth.js");

router.get("/", recetteController.getAllRecettes);
router.get("/:id", recetteController.getOneRecette);
router.post("/", auth, recetteController.postNewRecette);
router.delete("/:id", auth, recetteController.deleteOneRecette);
router.patch("/:id", auth, recetteController.updateOneRecette);

module.exports = router;
