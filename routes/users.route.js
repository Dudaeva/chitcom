const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/signup", usersController.signUp);
router.post("/signin", usersController.signIn);
router.post("/signout", authMiddleware, usersController.signOut);
router.get("/user-profile", authMiddleware, usersController.getUserById);
router.get("/users", usersController.getUsers)
module.exports = router;
