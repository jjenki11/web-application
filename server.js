var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/web')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

app.get('/dik_pik', function(req,res) {
    res.redirect('https://previews.123rf.com/images/capeman29/capeman291906/capeman29190600013/128474478-a-cartoon-penis-with-attitude-wearing-sunglasses-and-giving-a-thumbs-up.jpg');
    
})

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});