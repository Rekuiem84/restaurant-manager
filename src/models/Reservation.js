const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
	dateTime: { type: Date, required: true },
	client_name: { type: String, required: true },
	nb_tables: { type: Number, required: true },
	seatings: { type: Number, required: true },
});

module.exports = mongoose.model("Reservation", reservationSchema);
