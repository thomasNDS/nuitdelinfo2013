var id;
var gridGame;
var imgNinjaLoaded, imgBulletLoaded, imgSantaLoaded;
var imgNinja, imgBullet, imgSanta;
var cv = $("#canvasGame");


/*
 * Fonction qui génère l'id qui sera envoyée au serveur
 * TODO: Système pour renvoi d'id ou quoi sur le serveur
 */
function generateId() {
    id = Math.floor((Math.random() * 1000));
}

/*
 * Fonction pour charger les différentes images
 */
function loadImages() {
    imgNinja = new Image();
    imgNinja.src = 'truc.bnp';
    imgNinja.onload = function() {
        imgNinjaLoaded = true;
    };
    imgBullet = new Image();
    imgBullet.src = 'truc.bnp';
    imgBullet.onload = function() {
        imgBulletLoaded = true;
    };
    imgSanta = new Image();
    imgSanta.src = 'truc.bnp';
    imgSanta.onload = function() {
        imgSantaLoaded = true;
    };
}

function updateGame(game) {
    gridGame = game;
}

function draw() {
    var ctx = cv.getContext("2d");
    var rows = gridGame.length;
    var columns = gridGame.columns.length;
    for (var row in rows) {
        for (var col in columns){
            
        }
    }


}




//var obj = {};
//obj.attrib = {"id": "1"};

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

//var donnees = JSON.parse(truc);

console.log(truc);