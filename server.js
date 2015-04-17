var express = require('express');
var app = express();
var morgan = require('morgan');

// app.use(morgan('combined'));

// app.get('/style.css', function(req, res) {
//   res.sendFile(__dirname + '/style.css');
// });

// app.get('/skype-bg.png', function(req, res) {
//   res.sendFile(__dirname + '/skype-bg.png');
// });

app.use('*', express.static(__dirname));

app.listen(process.env.PORT || 3000);
