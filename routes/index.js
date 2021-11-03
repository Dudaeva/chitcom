const { Router } = require("express");

const router = Router();

router.use(require("./categories.route"));
router.use(require("./users.route"));
router.use(require("./posts.route"));
router.use(require("./reviews.route"));
router.use(require("./questions.route"));
router.use(require("./answers.route"));

module.exports = router;