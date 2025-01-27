const mongoose = require("mongoose");

const produitSchema = mongoose.Schema({
	name: { type: String, required: true },
	quantity: { type: String, required: true },
});

module.exports = mongoose.model("Produit", produitSchema, "Produit");
