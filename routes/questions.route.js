const { Router } = require("express");
const { questionsController } = require("../controllers/questions.controller");

const router = Router();

router.post("/question", questionsController.addQuestion);
router.patch("/question/:id", questionsController.updateQuestion);
router.delete("/question/:id", questionsController.deleteQuestion);
router.get("/question", questionsController.getAllQuestions);
router.get("/question/:id", questionsController.getQuestionsById);

module.exports = router;
