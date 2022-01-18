const Post = require("../models/Post.model");

module.exports.postsController = {
  addPosts: async (req, res) => {
    try {
      const { id } = req.user
      const { category, title, text } = req.body;
      if (!title || !text)
        return res.status(404).json({ error: "Поля ввода не могут быть пустыми!" });

      const isExists = await Post.findOne({ text });
      if (isExists)
        return res.status(404).json({ error: "Такой пост уже существует!" });

      const posts = await Post.create({
        author: id,
        category,
        title,
        text,
      });
      res.status(200).json({ success: "Пост успешно добавлен", posts });
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
      const { id } = req.params;
      const post = await Post.findById(id);
      //if (post.user.toString() === req.user.id) {
      await post.remove();
      return res.json({ success: "Пост удален", post });
      // }
      // return res.status(401).json({ error: "Ошибка! Нет доступа" });
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
    try {
      const posts = await Post.find({ category: req.params.categoryId }).populate("category author")
      if (!posts) {
        return res.status(404).json({
          error: "В данной категории нет постов",
        });
      }
      return res.json(posts);
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
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
