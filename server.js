const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(express.static("public"));

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  }
    else.redirect('http://' + req.hostname + req.url);
    }
});
app.use(express.static('public'));
console.log("Hello!");

//app.listen(PORT,() => {
app.listen(PORT, function () {
  console.log("server starter port 3000" + PORT);
});
