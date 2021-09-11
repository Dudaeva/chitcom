const { Router } = require("express");
const { questionsController } = require("../controllers/questions.controller");

const router = Router();

router.post("/questions", questionsController.addQuestion);
router.patch("/question/:id", questionsController.updateQuestion);
router.delete("/question/:id", questionsController.deleteQuestion);
router.get("/questions", questionsController.getAllQuestions);
router.get("/question/:questionId", questionsController.getQuestionById);

module.exports = router;
