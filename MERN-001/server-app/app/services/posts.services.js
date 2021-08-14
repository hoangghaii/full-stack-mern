const Posts = require("../models/Posts.models");

const getPosts = async (id) => {
	try {
		const posts = await Posts.find({ user: id }).populate("user", ["username"]);
		return posts;
	} catch (error) {
		throw error;
	}
};

const getDetailPost = async (id, userId) => {
	try {
		const post = await Posts.findById(id).populate("user", ["username"]);

		return post;
	} catch (error) {
		throw error;
	}
};

const createPost = async (userId, title, description, url, status) => {
	try {
		const newPost = new Posts({
			title,
			description,
			url: url.startsWith("https://") ? url : `https://${url}`,
			status: status || "TO LEARN",
			user: userId,
		});
		await newPost.save();
		return newPost;
	} catch (error) {
		throw error;
	}
};

const updatePost = async (userId, id, title, description, url, status) => {
	try {
		let updatedPost = {
			title,
			description: description || "",
			url: (url.startsWith("https://") ? url : `https://${url}`) || "",
			status: status || "TO LEARN",
		};

		const postUpdateCondition = { _id: id, user: userId };

		updatedPost = await Posts.findOneAndUpdate(postUpdateCondition, updatedPost, {
			new: true,
		});

		//User not authorised to update post or post not found
		if (!updatedPost) return;
		return updatedPost;
	} catch (error) {
		throw error;
	}
};

const deletePost = async (id, userId) => {
	try {
		const deletePostCondition = { _id: id, user: userId };
		const deletedPost = await Posts.findOneAndDelete(deletePostCondition);

		//User not authorised to update post or post not found
		if (!deletedPost) return;
		return deletedPost;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

module.exports = {
	createPost,
	getPosts,
	getDetailPost,
	updatePost,
	deletePost,
};
