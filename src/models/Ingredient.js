const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
	id_recette: { type: Number, required: true },
	id_produit: { type: Number, required: true },
	quantity: { type: String, required: true },
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
