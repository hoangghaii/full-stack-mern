const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users.models");

exports.getUser = async (userId) => {
	try {
		const user = Users.findById(userId).select("-password");
		return user;
	} catch (error) {
		throw error;
	}
};

exports.register = async (username, password) => {
	try {
		// Check for existing user
		const user = await Users.findOne({ username });
		if (user)
			return { status: 400, success: false, message: "Username already taken" };

		// All good
		const hashPassword = await argon2.hash(password);
		const newUser = new Users({ username, password: hashPassword });
		await newUser.save();

		// Return token
		const accessToken = jwt.sign(
			{ userId: newUser.id },
			process.env.ACCESS_TOKEN_SECRET
		);
		return {
			status: 200,
			success: true,
			message: "User created successfully",
			accessToken,
		};
	} catch (error) {
		throw error;
	}
};

exports.login = async (username, password) => {
	try {
		// Check for existing user
		const user = await Users.findOne({ username });
		if (!user)
			return {
				status: 400,
				success: false,
				message: "Incorrect username and/or password",
			};

		// Username found
		const passwordValid = await argon2.verify(user.password, password);
		if (!passwordValid)
			return {
				status: 400,
				success: false,
				message: "Incorrect username and/or password",
			};

		// All good
		const accessToken = jwt.sign(
			{ userId: user.id },
			process.env.ACCESS_TOKEN_SECRET
		);
		return {
			status: 200,
			success: true,
			message: "User logged in successfully",
			accessToken,
		};
	} catch (error) {
		throw error;
	}
};
