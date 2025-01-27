const mongoose = require("mongoose");

const platSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	type: { type: String, required: true, enum: ["entrée", "plat", "dessert"] },
});

module.exports = mongoose.model("Plat", platSchema, "Plat");
