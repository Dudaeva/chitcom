const Post = require("../models/Post.model");

module.exports.postsController = {
  addPosts: async (req, res) => {
    try {
      const { category, author, title, text, review } = req.body;
      const posts = await Post.create({
        category,
        author,
        title,
        text,
        review,
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
      const posts = await Post.find().populate("category author");
      res.json(posts);
    } catch (e) {
      res.json(e);
    }
  },
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId).populate("category author");
      if (!post)
        return res.status(404).json({ error: "Ошибка! Пост с таким ID не существует" });

      return res.status(200).json({ success: "Пост был успешно загружен", post });
    } catch (e) {
      res.json(e);
    }
  },
  getPostsCategoryId: async (req, res) => {
    try{
      const posts = await Post.find({category:req.params.categoryId})
      if (!posts) {
        return res.status(404).json({
          error: "В данной категории нет постов",
        });
      }
      return res.json(posts);
    } catch (e) {
      return res.status(400).json({error: e.toString()});
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
