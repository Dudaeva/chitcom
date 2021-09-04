const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const { PORT, MONGO_URI } = process.env;

app.use(express());
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
