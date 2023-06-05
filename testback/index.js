const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Hello there!!");
});

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/signup", (req, res) => {
  return res.send("You are visiting signup route");
});

app.listen(port, () => {
  console.log("Server is up and running...");
});
