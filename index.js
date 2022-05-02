let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('registrar-ocorrencia', (vals) =>{
    io.emit('apontar-ocorrencia', vals);
  });

  socket.on('registrar-ocorrencia-animal', (vals) =>{
    io.emit('apontar-ocorrencia-animal', vals);
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});