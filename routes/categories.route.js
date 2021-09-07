const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", categoriesController.getCategories);
router.post("/categories", categoriesController.addCategory);
router.delete("/categories/:id", categoriesController.deleteCategory);

module.exports = router;
