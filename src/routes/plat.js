const express = require("express");
const router = express.Router();
const platController = require("../controllers/platController");
const auth = require("../middlewares/auth.js");

router.get("/", platController.getAllPlats);
router.get("/:id", platController.getOnePlat);
router.post("/", auth, platController.postNewPlat);
router.delete("/:id", auth, platController.deleteOnePlat);
router.patch("/:id", auth, platController.updateOnePlat);

module.exports = router;
