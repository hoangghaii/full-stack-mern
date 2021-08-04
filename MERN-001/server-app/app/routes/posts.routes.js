const controller = require("../controllers/posts.controllers");
const { verifyToken } = require("../middlewares/auth.middlewares");

module.exports = function (app) {
	// @route GET api/posts
	// @desc Get posts
	// @access Private
	// app.get("/", )

	// @route POST api/posts
	// @desc Create post
	// @access Private
	app.post("/api/posts", controller.createPost);
};
