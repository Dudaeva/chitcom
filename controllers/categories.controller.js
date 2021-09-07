const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      const categories = await Category.create({
        name: req.body.name,
        description:req.body.description
      });
      res.json(categories);
    } catch (err) {
      console.log(err);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const categories = await Category.findByIdAndDelete(req.params.id);
      res.json(categories);
    } catch (err) {
      console.log(err);
    }
  },
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (err) {
      console.log(err);
    }
  },
};
