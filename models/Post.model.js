const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    review: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
