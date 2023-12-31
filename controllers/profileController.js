const User = require("../models/user");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TOKEN_KEY = "PGCRM_TOKEN";

const changePassword = async (req, res) => {
	const { currentPass, newPass, username } = req.body;
	if (!(currentPass && newPass)) {
		res.status(200).send({ cpChange: false, message: "All input is required" });
	}

	try {
		const user = await User.findOne({ email: username });
		if (!user) {
			res.status(200).send({ cpChange: false, message: "User Not found!" });
		} else {
			if (currentPass !== user.password) {
				res
					.status(200)
					.send({ cpChange: false, message: "Invalid current password." });
			} else {
				const dt = new Date().getTime();
				await User.updateOne(
					{ _id: user._id },
					{ $set: { password: newPass, last_login: dt } }
				);
				res
					.status(200)
					.send({ cpChange: true, message: "Password Changed successfully." });
			}
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	changePassword,
};
