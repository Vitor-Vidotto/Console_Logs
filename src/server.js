const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const morganBody = require("morgan-body");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

app.use(bodyParser.json());
const log = fs.createWriteStream(
  path.join(__dirname, "./logs", `express${moment().format("YYYY-MM-DD")}.log`),
  { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.get("/", (req, res) => {
  res.send("olá mundo");
});

app.post("/testepost", (req, res) => {
  res.send("olá mundo2");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
