const { Router } = require("express");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.use(require("./categories.route"));
router.use(require("./users.route"));
router.use(require("./posts.route"));
router.use(require("./reviews.route"));
router.use(require("./questions.route"));
router.use(authMiddleware, require("./answers.route"));

module.exports = router;