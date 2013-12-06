var socket = null;
var observations = {};
var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);
var ID = Math.floor(Math.random() * 9999);
/**
 * Constructeur de l'app client
 */
function init() {

    ws.onmessage = function(event) {
        console.log(JSON.parse(event.data));
    };

    $('#play').on('click', function() {
        console.log("play");
        ws.send(JSON.stringify({"type": "ID","data": ID}));
    });
}

