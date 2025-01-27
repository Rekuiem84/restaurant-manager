const express = require("express");
const router = express.Router();
const produitController = require("../controllers/produitController");

router.get("/", produitController.getAllProduits);
router.get("/:id", produitController.getOneProduit);
router.post("/", produitController.postNewProduit);
router.delete("/:id", produitController.deleteOneProduit);
router.patch("/:id", produitController.updateOneProduit);

module.exports = router;
