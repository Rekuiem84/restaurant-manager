const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
	recetteId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recette",
		required: true,
	},
	produitId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Produit",
		required: true,
	},
	quantity: { type: String, required: true },
});

module.exports = mongoose.model("Ingredient", ingredientSchema, "Ingredient");
