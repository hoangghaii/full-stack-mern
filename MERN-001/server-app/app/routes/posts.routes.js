const controller = require("../controllers/posts.controllers");
const verifyToken = require("../middlewares/auth.middlewares");

module.exports = function (app) {
	// @route GET api/posts
	// @desc Get posts
	// @access Private
	app.get("/api/posts", verifyToken, controller.getPosts);

	// @route POST api/posts
	// @desc Create post
	// @access Private
	app.post("/api/posts", verifyToken, controller.createPost);

	// @route PUT api/posts
	// @desc Update post
	// @access Private
	app.put("/api/posts/:id", verifyToken, controller.updatePost);

	// @route PUT api/posts
	// @desc Update post
	// @access Private
	app.delete("/api/posts/:id", verifyToken, controller.deletePost);
};
