const Post = require("../models/Post.model");

module.exports.postsController = {
  addPosts: async (req, res) => {
    try {
      const posts = await Post.create({
        category: req.body.category,
        user: req.body.user,
        text: req.body.text,
        review: req.body.review,
      });
      res.json(posts);
    } catch (e) {
      res.json(e);
    }
  },
  updatePosts: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.id);
      res.json("Пост изменен");
    } catch (e) {
      res.json(e);
    }
  },
  deletePosts: async (req, res) => {
    try {
      await Post.findOneAndRemove(req.params.id);
      res.json("Пост удален");
    } catch (e) {
      res.json(e);
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (e) {
      res.json(e);
    }
  },
  addReviews: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.id, {
        $push: { review: req.body.review },
      });
    } catch (e) {
      res.json(e);
    }
  },
};
