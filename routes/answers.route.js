const { Router } = require("express");
const { answersController } = require("../controllers/answers.controller");

const router = Router();

router.post("/answers", answersController.addAnswer);
router.patch("/answer/:id", answersController.updateAnswer);
router.patch("/question/:questionId/:answerId",answersController.resolvedQuestion);
router.delete("/answer/:id", answersController.deleteAnswer);

module.exports = router;
