const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
});

module.exports = mongoose.model("User", userSchema, "User");
