const { Schema, model } = require("mongoose");

const answerSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    resolved: false,
    toQuestion: {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  },
  { timestamps: true }
);

const Answer = model("Answer", answerSchema);

module.exports = Answer;
