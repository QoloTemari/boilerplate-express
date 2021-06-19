var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  })

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
  },
    function(req, res){
      res.send({"time": req.time});
  });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      res.send({"message": "Hello json".toUpperCase()})
    } else {
      res.send({"message": "Hello json"})
    }
    
app.get("/:word/echo", function(req, res){
res.send({"echo":req.params.word})
});

 
































 module.exports = app;
