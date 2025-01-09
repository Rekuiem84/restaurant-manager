const mongoose = require("mongoose");

const platSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
});

module.exports = mongoose.model("Plat", platSchema);
