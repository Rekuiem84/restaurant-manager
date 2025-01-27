const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const auth = require("../middlewares/auth.js");

router.get("/", reservationController.getAllReservations);
router.get("/:id", reservationController.getOneReservation);
router.post("/", auth, reservationController.postNewReservation);
router.delete("/:id", auth, reservationController.deleteOneReservation);
router.patch("/:id", auth, reservationController.updateOneReservation);

module.exports = router;
