const mongoose = require("mongoose");

const recetteSchema = mongoose.Schema({
	id_plat: { type: Number, required: true },
	preparation: { type: Text, required: true },
});

module.exports = mongoose.model("Recette", recetteSchema);
