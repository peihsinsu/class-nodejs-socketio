var io = require('socket.io').listen(8088);

console.log('SocketIO started....');
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

var http = require('http')
  , fs = require('fs')

console.log('http server started....');
http.createServer(function(req, res){
  console.log('access http server...');
  res.end(fs.readFileSync(__dirname + '/client.js'));
}).listen(8080);
