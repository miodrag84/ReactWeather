const express = require("express");

const app = express();

app.use(express.static("public"));

console.log("Hello!");

app.listen(3000,() => {
  console.log("server starter port 3000");
})
