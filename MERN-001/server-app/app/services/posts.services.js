const Posts = require("../models/Posts.models");

exports.createPost = async (title, description, url, status) => {
	try {
		const newPost = new Posts({
			title,
			description,
			url: url.startsWith("https://") ? url : `https://${url}`,
			status: status || "TO LEARN",
			userId: "610a53361822482638cbf6e7",
		});
		await newPost.save();
		return newPost;
	} catch (error) {
		return error;
	}
};
