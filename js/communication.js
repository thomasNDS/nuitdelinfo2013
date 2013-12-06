var socket = null;
var observations = {};
var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);

/**
 * Constructeur de l'app client
 */
function init() {

    ws.onmessage = function(event) {
        console.log(JSON.parse(event.data));
    };

//    $('#gaucher').on('click', function() {

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
gridgame = createMatrix(4,4);
gridgame.map[i].columns[j].type;

var truc = {
    "map": [{
            "row": "0",
            "columns": [
                {"id": "0", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]
        },
        {
            "row": "1",
            "columns": [
                {"id": "0", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]
        },
        {
            "row": "2",
            "columns": [
                {"id": "0", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]
        },
        {
            "row": "3",
            "columns": [
                {"id": "0", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]
        }]
};
