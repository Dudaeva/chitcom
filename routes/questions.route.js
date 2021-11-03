const { Router } = require("express");
const { questionsController } = require("../controllers/questions.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/questions", authMiddleware, questionsController.addQuestion);
router.patch("/question/:id", authMiddleware, questionsController.updateQuestion);
router.delete("/question/:id", authMiddleware, questionsController.deleteQuestion);
router.get("/questions", questionsController.getAllQuestions);
router.get("/question/:questionId", questionsController.getQuestionById);

module.exports = router;
