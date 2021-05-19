var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/web')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});