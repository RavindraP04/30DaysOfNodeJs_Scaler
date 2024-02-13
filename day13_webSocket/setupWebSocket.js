const WebSocket = require('ws');

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
      console.log('Received: %s', message);
      // Echo back the received message
      ws.send(message);
    });
  });

  console.log('WebSocket server is listening');
}

module.exports = setupWebSocket;
