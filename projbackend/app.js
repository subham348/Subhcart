require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`DB CONNECTED`);
});

const port = process.env.PORT || 8000;

app.listen(() => {
  console.log(`App is running at ${port}`);
});
