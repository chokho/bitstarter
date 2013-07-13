var express = require('express');

var app = express.createServer(express.logger());

var buff = new Buffer(20);

fs.readFile('index.html'), function (err, buff) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
