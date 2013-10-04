<script src="http://localhost:8088/socket.io/socket.io.js"></script>
<script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>

<script>
var socket = io.connect('http://localhost:8088');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
  $('#ts').html(JSON.stringify(data));
});
</script>

<h1>
TEST...
<div id="ts">
time will be here...
</div>
</h1>
