const express = require("express");
const router = express.Router();
const salleController = require("../controllers/salleController");

router.get("/", salleController.getAllSalles);
router.get("/:id", salleController.getOneSalle);
router.post("/", salleController.postNewSalle);
router.delete("/:id", salleController.deleteOneSalle);
router.patch("/:id", salleController.updateOneSalle);

module.exports = router;
