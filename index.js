const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const path = require("path");
require("dotenv").config();

const app = express();
const { PORT, MONGO_URI } = process.env;

app.use(fileUpload({}));
app.use("public", express.static(path.resolve(__dirname, "/client/public")));
app.use(express.json());
app.use(cors());

app.use(require("./routes/index"));

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log("Сервер был успешно запущен!"));
  } catch (e) {
    console.log({ Error: e });
  }
};

start();
