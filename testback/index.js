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

const isLoggedIn = (req, res, next) => {
  console.log("isLoggedIn is running..");
  next();
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running..");
  next();
};

const admin = (req, res) => {
  return res.send("This is Admin");
};

app.get("/admin", isLoggedIn, isAdmin, admin);

app.listen(port, () => {
  console.log("Server is up and running...");
});
