var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('jotergolf.html', { root: __dirname });
});

app.get('/settings', function(req, res) {
    var settings = require("./settings");
    res.send("var settings = "+JSON.stringify(settings));
});

app.get('/editor', function(req, res){
  res.sendFile('editor.html', { root: __dirname });
});



app.use('/assets', express.static('assets'));
app.use('/static', express.static('static'));


var settings = require("./settings");

http.listen(settings.gameServer.port, function(){
  console.log('listening on *:'+settings.gameServer.port);
});