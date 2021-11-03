const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const path = require("path");
require("dotenv").config();

const app = express();
const { PORT, MONGO_URI, NODE_ENV } = process.env;

app.use(express());
app.use(fileUpload({}));
//app.use("public", express.static(path.resolve(__dirname, "/client/public")));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client", NODE_ENV === "production" ?  "build" : "public")));

app.use(require("./routes/index"));

// if (NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
// }

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log("Сервер был успешно запущен!"));
  } catch (e) {
    console.log({ Error: e });
  }
};

start();
