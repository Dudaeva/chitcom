const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: String,
    resolved: false,
    toQuestion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  },
  { timestamps: true }
);

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
