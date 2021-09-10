const Question = require("../models/Question.model");

module.exports.questionsController = {
  addQuestion: async (req, res) => {
    try {
      const {author, title, text} = req.body;
      await Question.create({author, title, text});

      res.status(200).json({success: "Вопрос успешно задан"});
    } catch (e) {
      res.status(404).json({error: e});
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
      const questions = await Question.find().populate("author");
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
  getQuestionById: async (req, res) => {
    try {
      const questions = await Question.findById(req.params.id);
      res.json(questions);
    } catch (e) {
      res.json(e);
    }
  },
};
