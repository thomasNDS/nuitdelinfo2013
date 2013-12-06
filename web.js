var LC = 0; //clock virtuelle du jeu 
var map = [[]];
var timeRate = 1000;

var map;
var WebSocketServer = require('ws').Server
  , http = require('http')
  , express = require('express')
  , app = express()
  , port = process.env.PORT || 4242;

app.use(express.static(__dirname + '/'));

var server = http.createServer(app);
server.listen(port);

console.log('http server listening on %d', port);

var wss = new WebSocketServer({server: server});
console.log('websocket server created');

wss.on('connection', function(ws) {
    var id = setInterval(function() {
         LC += 1;
        ws.send(JSON.stringify(map));
    }, timeRate);

    console.log('websocket connection open');

    ws.on('close', function() {
        console.log('websocket connection close');
        clearInterval(id);
    });

 ws.on('message', function(message) {
        console.log('received: %s', message);
    });
});
