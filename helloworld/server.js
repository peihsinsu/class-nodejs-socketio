//var io = require('socket.io').listen(8088)
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8088); 

function handler (req, res) {
  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + '/client.js'));
}

console.log('SocketIO started....');
io.sockets.on('connection', function (socket) {
  setInterval(function(){
  socket.emit('news', { hello: 'world ' + new Date()  });
  }, 1000);
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

