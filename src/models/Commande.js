const mongoose = require("mongoose");

const commandeSchema = mongoose.Schema({
	plats: [
		{
			platId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Plat",
				required: true,
			},
			quantity: { type: Number, required: true },
		},
	],
	notes: { type: String },
	is_done: { type: Boolean, required: true, default: false },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Commande", commandeSchema, "Commande");
