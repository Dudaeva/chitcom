const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/signup", usersController.signUp);
router.post("/signin", usersController.signIn);
router.get("/user-profile/", authMiddleware, usersController.getUserById)

module.exports = router;
