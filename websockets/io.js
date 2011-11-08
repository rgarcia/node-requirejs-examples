define(['socket.io','./app'], function(socketio,app) {

  // sets up basic websocket handlers given an express app object
  var io = socketio.listen(app);

  io.sockets.on('connection', function(socket) {
    console.log('websocket connection started');
    socket.join('*');
    io.sockets.in('*').emit('msg','hello!');
  });

  return io;
});
