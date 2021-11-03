const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/signup", usersController.signUp);
router.post("/signin", usersController.signIn);
router.get("/users", usersController.getUsers);

module.exports = router;
