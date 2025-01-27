const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.post("/", userController.postNewUser);
router.delete("/:id", userController.deleteOneUser);
router.patch("/:id", userController.updateOneUser);

module.exports = router;
