const Question = require("../models/Question.model");

module.exports.questionsController = {
  addQuestion: async (req, res) => {
    try {
      const questions = await Question.create({
        user: req.body.user,
        title: req.body.title,
        text: req.body.text,
      });
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
  deleteQuestion: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //       const questions = await Question.findById(id);
    //       if (questions.user.toString() === req.user.id) {
    //         await questions.remove();
    //         return res.json("Удалено");
    //       }
    //       return res.status(401).json({error:"ошибка.нет доступа"});
    //     } catch (e) {
    //       return res.status(401).json("error" + e.toString());
    //     }
    //   },

    try {
      await Question.findOneAndRemove(req.params.id);
      res.send("Вопрос удален");
    } catch (e) {
      res.json(e);
    }
  },
  updateQuestion: async (req, res) => {
    try {
      const questions = await Question.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
  getAllQuestions: async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
  getQuestionsById: async (req, res) => {
    try {
      const questions = await Question.findById(req.params.id);
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
};
