const mongoose = require("mongoose");

const salleSchema = mongoose.Schema({
	max_tables: { type: Number, required: true },
	max_couverts: { type: Number, required: true },
});

module.exports = mongoose.model("Salle", salleSchema, "Salle");
