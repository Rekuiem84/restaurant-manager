const express = require("express");
const router = express.Router();
const platController = require("../controllers/platController");

router.get("/", platController.getAllPlats);
router.get("/:id", platController.getOnePlat);
router.post("/", platController.postNewPlat);
router.delete("/:id", platController.deleteOnePlat);
router.patch("/:id", platController.updateOnePlat);

module.exports = router;
