const express = require("express");
const router = express.Router();
const produitController = require("../controllers/produitController");
const auth = require("../middlewares/auth.js");

router.get("/", produitController.getAllProduits);
router.get("/:id", produitController.getOneProduit);
router.post("/", auth, produitController.postNewProduit);
router.delete("/:id", auth, produitController.deleteOneProduit);
router.patch("/:id", auth, produitController.updateOneProduit);

module.exports = router;
