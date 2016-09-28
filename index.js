var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).json({
    status: 'OK'
  });
});

app.get('/hello-world', function (req, res) {
  res.status(200).json({
    hello: 'world!'
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('**********************************');
  console.log(`Listening on port ${port}`);
  console.log(`Heroku environment is ${process.env.HEROKU_ENV}`);
  console.log('**********************************');
});