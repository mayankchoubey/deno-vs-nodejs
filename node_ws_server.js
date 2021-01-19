const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(404);
    response.end();
});
server.listen(process.env.PORT||3000, () => console.log(Date.now() + ' Server is listening'));

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: true
});

wsServer.on('connect', (conn) => { 
    conn.on('message', (message) => {
        if (message.type === 'utf8') {
            conn.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            connection.sendBytes(message.binaryData);
        }
    });
    conn.on('close', (reasonCode, description) => null);
});
