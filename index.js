let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('registrar-ocorrencia', (vals) =>{
    let data = {
      id: vals.id,
      title: vals.titulo,
      desc: vals.descricao,
      data_ocorrencia: vals.ocorrencia,
      img: vals.img,
      localidade: vals.localidade,
      timer: vals.timer,
      icon: vals.icone,
      latitude: vals.lat,
      longitude: vals.long,
      prioridade: vals.prioridade
    };
    io.emit('apontar-ocorrencia', data);
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});