const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const auth = require("../middlewares/auth.js");

router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getOneRole);
router.post("/", auth, roleController.postNewRole);
router.put("/:id", auth, roleController.updateOneRole);
router.delete("/:id", auth, roleController.deleteOneRole);

module.exports = router;
