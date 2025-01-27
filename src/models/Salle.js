const mongoose = require("mongoose");

const salleSchema = mongoose.Schema({
	max_tables: { type: Number, required: true },
	max_couverts: { type: Number, required: true },
	taken_tables: { type: Number, default: 0 },
	taken_couverts: { type: Number, default: 0 },
});

module.exports = mongoose.model("Salle", salleSchema, "Salle");
