const { createPost } = require("../services/posts.services");

exports.createPost = async (req, res) => {
	const { title, description, url, status } = req.body;

	if (!title)
		return res.status(400).json({ success: false, message: "Title is required" });

	try {
		const newPost = await createPost(title, description, url, status);
		res
			.status(200)
			.json({ success: true, message: "Happy learning!", post: newPost });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
