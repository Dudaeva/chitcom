const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");

const router = Router();

router.post("/posts", postsController.addPosts);
router.patch("/posts/:id", postsController.updatePosts);
router.delete("/posts/:id", postsController.deletePosts);
router.get("/posts", postsController.getPosts);
router.patch("/posts/review/:id", postsController.addReviews);

module.exports = router;
