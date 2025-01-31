const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const auth = require("../middlewares/auth.js");

router.get("/", auth, auth.checkRoles([]), roleController.getAllRoles);
router.get("/:id", auth, auth.checkRoles([]), roleController.getOneRole);
router.post("/", auth, auth.checkRoles([]), roleController.postNewRole); // Admin autorisé par défaut
router.put("/:id", auth, auth.checkRoles([]), roleController.updateOneRole); // Admin autorisé par défaut
router.delete("/:id", auth, auth.checkRoles([]), roleController.deleteOneRole); // Admin autorisé par défaut

module.exports = router;
