const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
console.log("public path", publicPath);
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
