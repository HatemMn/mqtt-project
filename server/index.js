const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 8082 });

ws.on('connection', function connection(wsConnection) {
  wsConnection.on('message', function incoming(message) {
    console.log(`server received: ${message}`);
  });

  wsConnection.send('Les Tortues (Testudines), ou Cheloniens, forment un ordre de reptiles dont la caracteristique est d avoir une carapace');
});