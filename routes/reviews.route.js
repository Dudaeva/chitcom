const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews",  reviewsController.addReview);
router.patch("/reviews/:id", reviewsController.updateReview);
router.delete("/reviews/:id", reviewsController.deleteReview);
router.get("/reviews", reviewsController.getReviews);

module.exports = router;
