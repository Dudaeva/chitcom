const Answer = require("../models/Answer.model");
const Question = require("../models/Question.model");

module.exports.answersController = {
  addAnswer: async (req, res) => {
    try {
      const {author, text, toQuestion} = req.body;

      const answer = await Answer.create({ author, text, toQuestion });
      await Question.findByIdAndUpdate(toQuestion, {$push: {answers: answer.id}});

      res.status(200).json({success: "Комментарий успешно оставлен"});
    } catch (e) {
      res.status(404).json({error: e});
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
};
