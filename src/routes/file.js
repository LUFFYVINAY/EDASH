const express = require("express");

const { route } = require("express/lib/application");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("this is msg from sever");
});

module.exports = routes;
