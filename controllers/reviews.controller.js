const Review = require("../models/Answer.model");

module.exports.reviewsController = {
  addReview: async (req, res) => {
    try {
      const reviews = await Review.create({
        user: req.body.user,
        text: req.body.text,
      });
      res.json(reviews);
    } catch (e) {
      res.json(e);
    }
  },
  updateReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, req.body);
      res.send("отзыв изменен");
    } catch (e) {
      res.json(e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findOneAndRemove(req.params.id);
      res.send("Отзыв удален");
    } catch (e) {
      res.json(e);
    }
  },
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (e) {
      res.json(e);
    }
  },
};
