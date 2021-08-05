const { getUser, register, login } = require("../services/auth.services");

exports.getUser = async (req, res) => {
	try {
		const user = await getUser(req.userId);
		if (!user)
			return res.status(400).json({ success: false, message: "User not found" });
		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

exports.register = async (req, res) => {
	const { username, password } = req.body;

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: "Missing username and/or password" });

	try {
		const response = await register(username, password);
		if (response.status === 400)
			return res
				.status(400)
				.json({ success: response.success, message: response.message });

		res.status(200).json({
			success: response.success,
			message: response.message,
			accessToken: response.accessToken,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: "Missing username and/or password" });

	try {
		const response = await login(username, password);
		if (response.status === 400)
			return res
				.status(400)
				.json({ success: response.success, message: response.message });

		res.status(200).json({
			success: response.success,
			message: response.message,
			accessToken: response.accessToken,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
