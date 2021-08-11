const {
	createPost,
	getPosts,
	updatePost,
	deletePost,
} = require("../services/posts.services");

exports.getPosts = async (req, res) => {
	try {
		const posts = await getPosts(req.userId);
		res.status(200).json({ success: true, post: posts });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

exports.createPost = async (req, res) => {
	const { title, description, url, status } = req.body;

	if (!title)
		return res.status(400).json({ success: false, message: "Title is required" });

	try {
		const newPost = await createPost(req.userId, title, description, url, status);
		res
			.status(200)
			.json({ success: true, message: "Happy learning!", post: newPost });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

exports.updatePost = async (req, res) => {
	const { title, description, url, status } = req.body;
	const id = req.params.id;

	if (!title)
		return res.status(400).json({ success: false, message: "Title is required" });

	try {
		const updatedPost = await updatePost(
			req.userId,
			id,
			title,
			description,
			url,
			status
		);
		if (!updatedPost)
			return res
				.status(401)
				.json({ success: false, message: "Post not found or user not authorised" });
		res
			.status(200)
			.json({ success: true, message: "Excellent progress!", post: updatedPost });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

exports.deletePost = async (req, res) => {
	const id = req.params.id;

	try {
		const deletedPost = await deletePost(id, req.userId);

		if (!deletedPost)
			return res
				.status(401)
				.json({ success: false, message: "Post not found or user not authorised" });

		res.status(200).json({ success: true, message: "Delete post succesfully!" });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
