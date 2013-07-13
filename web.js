var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, buff) {
  if (err) {
    console.log(buff);
  }
});

app.get('/', function(request, response) {
  response.send(buff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
