const express = require('express');
const http = require('http');
const setupWebSocket = require('./setupWebSocket');

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
