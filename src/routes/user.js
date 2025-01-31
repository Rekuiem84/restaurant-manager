const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth.js");

router.get("/", auth, auth.checkRoles([]), userController.getAllUsers); // Admin autorisé par défaut
router.get("/:id", auth, auth.checkRoles([]), userController.getOneUser); // Admin autorisé par défaut
router.post("/", auth, auth.checkRoles([]), userController.postNewUser); // Admin autorisé par défaut
router.delete("/:id", auth, auth.checkRoles([]), userController.deleteOneUser); // Admin autorisé par défaut
router.patch("/:id", auth, auth.checkRoles([]), userController.updateOneUser); // Admin autorisé par défaut

router.post("/login", userController.loginUser);

module.exports = router;
