const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getOneRole);
router.post("/", roleController.postNewRole);
router.put("/:id", roleController.updateOneRole);
router.delete("/:id", roleController.deleteOneRole);

module.exports = router;
