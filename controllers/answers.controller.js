const Answer = require("../models/Answer.model");
const Question = require("../models/Question.model");
const {Types, Schema} = require("mongoose");

module.exports.answersController = {
  addAnswer: async (req, res) => {
    try {
      const { id } = req.user
      const { text, toQuestion } = req.body;

      const answer = await Answer.create({ author: id, text, toQuestion });
      await Question.findByIdAndUpdate(toQuestion , {$push: {answers: answer.id}});

      res.status(200).json({success: "Комментарий успешно оставлен", answer});
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
  resolveQuestion: async (req, res) => {
    try {
      const candidate = await Answer.findOne({toQuestion: req.params.questionId, resolved: true});
      if (candidate)
        return res.status(404).json({error: "Ошибка.. Не может быть два лучших варианта. Выберите один!"});

      const answer = await Answer.findByIdAndUpdate(req.params.answerId, {resolved: true});

      return res.status(200).json({success: "Ответ был помечен, как лучший"});
    } catch (e) {
      return res.status(404).json({error: e});
    }
  },
  unresolveQuestion: async (req, res) => {
    try {
      //const candidate = await Answer.findOne({toQuestion: req.params.questionId, resolved: true});

      await Answer.findByIdAndUpdate(req.params.answerId, {resolved: false});

      return res.status(200).json({success: "Ответ больше не является лучшим"});
    } catch (e) {
      return res.status(404).json({error: e});
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
  likeAnswer: async (req, res) => {
    try {
      const { answerId } = req.body;
      const candidate = await Answer.findOne({$and: [{_id: req.body.answerId}, {likes: Types.ObjectId(req.user.id)}]});

      if (candidate) {
        await Answer.findByIdAndUpdate(answerId, {$pull: {likes: req.user.id}});
        return res.status(200).json({success: "Лайк успешно убран"});
      } else {
        await Answer.findByIdAndUpdate(answerId, {$push: {likes: req.user.id}});
        return res.status(200).json({success: "Лайк успешно поставлен"});
      }

    } catch (e) {
      res.status(404).json({error: e});
    }
  },
  dislikeAnswer: async (req, res) => {
    try {
      const { answerId } = req.body;
      const candidate = await Answer.findOne({_id: req.body.answerId, dislikes: Types.ObjectId(req.user.id)});

      if (candidate) {
        await Answer.findByIdAndUpdate(answerId, {$pull: {dislikes: req.user.id}});
        return res.status(200).json({success: "Дизлайк успешно убран"});
      } else {
        await Answer.findByIdAndUpdate(answerId, {$push: {dislikes: req.user.id}});
        return res.status(200).json({success: "Дизлайк успешно поставлен"});
      }


    } catch (e) {
      res.status(404).json({error: e});
    }
  },
};
