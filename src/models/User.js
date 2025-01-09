const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	perms: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
