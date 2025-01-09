const mongoose = require("mongoose");

const commandeSchema = mongoose.Schema({
	id_reservation: { type: Number, required: true },
	order: { type: Text, required: true },
	is_done: { type: String, required: true },
});

module.exports = mongoose.model("Commande", commandeSchema);
