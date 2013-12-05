var LC = 0; //clock virtuelle du jeu 
var map = [[]];
var timeRate = 1000;

var Server = {
    fs: require('fs'),
    express: require('express'), // Appel au framework express
    io: require('socket.io'), // Appel au package websocket
    app: null,
    platforms: {},
    observers: {},
    /**
     * Constructeur du serveur
     * 
     * @param {int} port
     */
    init: function(port) {
        this.app = this.express().use(this.express.static(__dirname))
                .use(this.express.json())
                .listen(port);
        this.io = this.io.listen(this.app, {log: false});
        this.io.on('connection', function(socket) {

            socket.on('mode', function(data) {
                console.log("connection player");
                switch (data.mode) {
                    case 'player':
                        var obs = {socket: socket};
                        Server.observers[socket.id] = obs;
                        break;
                    default:
                        if (this.observers[socket.id]) {
                            delete Server.observers[socket.id];
                        }
                }

            });
            socket.on('pause', function() {
                console.log("pause " + pause);
                pause = !pause;
                for (var i in Server.observers) {
                    Server.observers[i].socket.emit('pause', {mode: pause});
                }
            });
        });
        this.setTimer();
    },
    /**
     * Fonction de deconnection d'un client ou d'une plateforme
     * La fonction s'appelle toute seule lors d'une déco
     * 
     * @param {type} socket
     */
    disconnect: function(socket) {
        console.log('disconnect');
        if (this.platforms[socket.id]) {        //Check des plateformes
            delete this.platforms[socket.id];
        }
        if (this.observers[socket.id]) {        //check des observateurs
            delete this.observers[socket.id];
        }
        for (var i in this.observers) {         //notification à tous
            this.observers[i].socket.emit('disappear', {id: socket.id});
        }
    },
    connection: function(socket) {
        console.log('connection');
        var ptf = {socket: socket};
        this.platforms[socket.id] = ptf;
    },
    sendMap: function() {
        var obj = {truc: "azerty"};
        for (var i in Server.observers) {
            Server.observers[i].socket.emit('mapUp', {map: obj});
        }
    },
    /**
     * le timer de rafraichissement de la page
     */
    setTimer: function() {
        (function(y)
        {
            setInterval(function() {
                console.log("logicalClock: " + LC);
                LC += 1;
                Server.sendMap();
            }, timeRate);
        })(0);
    },
    /**
     * On met à jour la map après un coup de logical clock
     */
    updateMap: function() {

    }
};


var port = process.argv[2] || 4242;
console.log("Listening on port " + port + '\n http://localhost:4242/');
Server.init(port);

