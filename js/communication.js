var socket = null;
var observations = {};

/**
 * Constructeur de l'app client
 */
function init() {
    console.log("init");
    socket = io.connect();
    //Ajout des listener de messages
    socket.on('disappear', function(data) {
        var obj = observations[data.id];
        if (obj) {
            obj.svg.parentNode.removeChild(obj.svg);
            delete observations[data.id];
        }
    });

    socket.on('mapUp', function(data) {
        console.log(data);
    });

//    $('#gaucher').on('click', function() {
    subscribe2Server('player');
}

/**
 * Affiche le menu observateur
 * @param {type} mymode
 */
function subscribe2Server(mymode) {
    socket.emit('mode', {mode: mymode});
}
