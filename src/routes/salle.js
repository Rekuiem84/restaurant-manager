const express = require("express");
const router = express.Router();
const salleController = require("../controllers/salleController");
const auth = require("../middlewares/auth.js");

router.get("/", salleController.getAllSalles);
router.get("/:id", salleController.getOneSalle);
router.post("/", auth, salleController.postNewSalle);
router.delete("/:id", auth, salleController.deleteOneSalle);
router.patch("/:id", auth, salleController.updateOneSalle);

module.exports = router;
