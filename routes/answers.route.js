const { Router } = require("express");
const { answersController } = require("../controllers/answers.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/answers", authMiddleware, answersController.addAnswer);
router.patch("/answer/:id", authMiddleware, answersController.updateAnswer);
router.patch("/question/:questionId/:answerId", authMiddleware,answersController.resolvedQuestion);
router.delete("/answer/:id", answersController.deleteAnswer);

module.exports = router;
