const Question = require("../models/Question.model");

module.exports.questionsController = {
  addQuestion: async (req, res) => {
    try {
      const {author, title, text} = req.body;
      if (!title || !text)
        return res.status(404).json({error: "Поля ввода не могут быть пустыми!"});

      const isExists = await Question.findOne({text});
      if (isExists)
        return res.status(404).json({error: "Такой вопрос уже существует!"});

      await Question.create({author, title, text});

      return res.status(200).json({success: "Вопрос успешно задан"});
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
      const { page = 1, limit = 10 } = req.query;
      const questions = await Question
          .find()
          .sort('-updatedAt')
          .populate("author")
          .limit(limit * 1)
          .skip((page - 1) * limit);

      res.status(200).json({questions, success: "Новости успешно загружены"});
    } catch (e) {
      res.status(404).json({error: e});
    }
  },
  getQuestionById: async (req, res) => {
    try {
      const question = await Question.findById(req.params.questionId)
      .populate("answers author").populate({path: "answers", populate: {path: "author", model: "User"}});

      if (!question) 
        return res.status(404).json({error: "Ошибка! Вопроса с таким ID не существует"});
      
      return res.status(200).json({success: "Вопрос был успешно загружен", question});
    } catch (e) {
      return res.status(404).json({error: e});
    }
  },
};
