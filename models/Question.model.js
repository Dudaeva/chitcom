const {Schema, model} = require("mongoose");

const questionSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer"
        }
    ]
  },  { timestamps: true }
);

module.exports = model("Question", questionSchema);
