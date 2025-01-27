const mongoose = require("mongoose");

const recetteSchema = mongoose.Schema({
	platId: { type: mongoose.Schema.Types.ObjectId, ref: "Plat", required: true },
	preparation: { type: String, required: true },
	ingredients: [
		{
			ingredientId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Ingredient",
				required: true,
			},
			quantity: { type: String, required: true },
		},
	],
});

module.exports = mongoose.model("Recette", recetteSchema, "Recette");
