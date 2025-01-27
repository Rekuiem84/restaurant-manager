const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/", reservationController.getAllReservations);
router.get("/:id", reservationController.getOneReservation);
router.post("/", reservationController.postNewReservation);
router.delete("/:id", reservationController.deleteOneReservation);
router.patch("/:id", reservationController.updateOneReservation);

module.exports = router;
