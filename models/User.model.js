const { Schema, model } = require("mongoose");

const userSchema = Schema({
	name: String,
	login: {
		required: true,
		type: String
	},
	password: {
		required: true,
		type: String
	},
	avatar_URI: String,
	telegram_URI: String,
	roles: {
		type: String,
		default: "Пользователь"
	}
}, { timestamps: true });

module.exports = model("User", userSchema, "users");
