var express = require('express');
var app = express();
var config = require('config');

app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + '/style.css');
});

app.get('/skype-bg.png', function(req, res) {
  res.sendFile(__dirname + '/skype-bg.png');
});

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/' + config.get('file'));
});

app.listen(process.env.PORT || 3000);
