const Answer = require("../models/Answer.model");

module.exports.answersController = {
  addAnswer: async (req, res) => {
    try {
      const answers = await Answer.create({
        user: req.body.user,
        text: req.body.text,
        toQuestion: req.body.toQuestion,
      });
      res.json(answers);
    } catch (e) {
      res.json(e);
    }
  },
  updateAnswer: async (req, res) => {
    try {
      const answers = await Answer.findByIdAndUpdate(req.params.id, req.body);
      res.json(answers);
    } catch (e) {
      res.json(e);
    }
  },
  resolvedQuestion: async (req, res) => {
    try {
      const answers = await Answer.findByIdAndUpdate(req.params.answerId, {
        resolved: true,
      });
      res.json(answers);
    } catch (e) {
      res.json(e);
    }
  },
  deleteAnswer: async (req, res) => {
    try {
      await Answer.findOneAndRemove(req.params.id);
      res.send("Ответ удален");
    } catch (e) {
      res.json(e);
    }
  },
  getAnswers: async (req, res) => {
    try {
      const answers = await Answer.find();
      res.json(answers);
    } catch (e) {
      res.json(e);
    }
  },
};
