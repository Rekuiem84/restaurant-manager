const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commandeController");

router.get("/", commandeController.getAllCommandes);
router.get("/:id", commandeController.getOneCommande);
router.post("/", commandeController.postNewCommande);
router.delete("/:id", commandeController.deleteOneCommande);
router.patch("/:id", commandeController.updateOneCommande);

module.exports = router;
