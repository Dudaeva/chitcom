const { Router } = require("express");
const { answersController } = require("../controllers/answers.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/answers", authMiddleware, answersController.addAnswer);
router.patch("/answer/:id", authMiddleware, answersController.updateAnswer);
router.post("/question/:questionId/:answerId/resolve", authMiddleware, answersController.resolveQuestion);
router.post("/question/:questionId/:answerId/unresolve", authMiddleware, answersController.unresolveQuestion);
router.delete("/answer/:id", answersController.deleteAnswer);
router.post("/answer/like", authMiddleware, answersController.likeAnswer);
router.post("/answer/dislike", authMiddleware, answersController.dislikeAnswer);


module.exports = router;
