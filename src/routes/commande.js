const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commandeController");
const auth = require("../middlewares/auth.js");

router.get("/", commandeController.getAllCommandes);
router.get("/:id", commandeController.getOneCommande);
router.post("/", auth, commandeController.postNewCommande);
router.delete("/:id", auth, commandeController.deleteOneCommande);
router.patch("/:id", auth, commandeController.updateOneCommande);

module.exports = router;
