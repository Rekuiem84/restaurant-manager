const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const auth = require("../middlewares/auth.js");

router.get(
	"/",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.getAllReservations
);
router.get(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.getOneReservation
);
router.post(
	"/",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.postNewReservation
);
router.delete(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.deleteOneReservation
);
router.patch(
	"/:id",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.updateOneReservation
);
router.get(
	"/date/:date",
	auth,
	auth.checkRoles(["Réceptionniste"]),
	reservationController.getReservationsByDay
);

module.exports = router;
