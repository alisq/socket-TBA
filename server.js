const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Datastore = require('nedb');
var db = new Datastore({ filename: 'data.json', autoload: true });
let activeUsers = {};


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static('public'))

io.on('connection', (socket) => {
    const _id = socket.id
    

    activeUsers[_id] = {time:Date.now()};
    console.log(activeUsers)

    socket.on('disconnect', (socket) => {
      console.log('user disconnected'); 
      db.insert(activeUsers[_id], function (err, newDoc) {});
      delete activeUsers[_id]; 
      console.log(activeUsers)
    });

    socket.on('clicked', (data) => {
        //io.emit('chat message', msg);
        activeUsers[_id].clicks = data.clicks
        
        
      });

      
  
      
  });
  
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});