var socket = io.connect();
socket.on('msg', function(msg) {
  console.log('got message via websocket:', msg);
});
