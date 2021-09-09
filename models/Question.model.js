const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    text: String,
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
