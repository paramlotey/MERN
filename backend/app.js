const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./Database/conn");

app.use(express.json());
app.use(require('./Route/route.js'));

const port = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("next");
  next();
};

app.listen(port, () => {
  console.log(`${port}`);
});
