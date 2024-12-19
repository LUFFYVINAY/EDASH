const express = require("express");
const app = express();

const routes = require("./file");

app.use("", routes);

app.listen(process.env.PORT || 5556, () => {
  console.log("Server started");
});
