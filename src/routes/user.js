const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth.js");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.post("/", auth, userController.postNewUser);
router.delete("/:id", auth, userController.deleteOneUser);
router.patch("/:id", auth, userController.updateOneUser);

router.post("/login", userController.loginUser);

module.exports = router;
