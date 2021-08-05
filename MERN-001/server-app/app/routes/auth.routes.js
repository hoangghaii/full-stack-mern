const controller = require("../controllers/auth.controllers");
const verifyToken = require("../middlewares/auth.middlewares");

module.exports = function (app) {
	// @route GET api/auth
	// @desc Check if user is logged in
	// @access Public
	app.get("/api/auth", verifyToken, controller.getUser);

	// @route POST api/auth/register
	// @desc Register user
	// @access Public
	app.post("/api/auth/register", controller.register);

	// @route POST api/auth/login
	// @desc Login user
	// @access Public
	app.post("/api/auth/login", controller.login);
};
