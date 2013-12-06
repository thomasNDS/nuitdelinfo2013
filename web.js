var LC = 0; //clock virtuelle du jeu 
var map = [[]];
var timeRate = 1000;
var gridmap = createMatrix(20,10);

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
        ws.send(JSON.stringify(gridmap));
        updateMap();
    }, timeRate);

    console.log('websocket connection open');

    ws.on('close', function() {
        console.log('websocket connection close');
        clearInterval(id);
    });

    ws.on('message', function(message) {
        var res = JSON.parse(message);
        if (res.type = "ID") {
            console.log("ID");
            addSanta(res.data);
        }
        console.log('received: %s', res.data);
    });
});

function echanger (sx,sy,fx,fy){
    var ech = gridmap.map[fx].columns[fy];
    gridmap.map[fx].columns[fy] =  gridmap.map[fx].columns[sy];
    gridmap.map[sx].columns[sy]=  ech;
    
}

function addSanta(id) {
    gridmap.map[0].columns[0] = {"id": id, "lvl": 1, "type": "santa", "clock": LC, "img": ""};
}

function createMatrix(sx, sy) {
    var arr = [];
    for (i = 0; i < sx; i++) {
        var row = {};
        var subarr = [];
        for (j = 0; j < sy; j++) {
            cas = {"id": j, "lvl": 0, "type": "vide", "clock": 0, "img": ""};
            subarr.push(cas);
        }
        row = {'columns': subarr, "row": i};
        arr.push(row);
    }
    return {"map": arr};
}

function updateMap(){
    
}