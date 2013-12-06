var id;
var gridGame;
var imgNinja, imgBullet, imgSanta;
var cv = document.getElementById("canvasGame");
var nbRows, nbColumns;

/*
 * Fonction qui génère l'id qui sera envoyée au serveur
 * TODO: Système pour renvoi d'id ou quoi sur le serveur
 */
function generateId() {
    id = Math.floor((Math.random() * 1000));
}

/*
 * Fonction pour charger les différentes images
 * Quand une image est chargée, toutes les images correspondantes au type de l'image vont être dessinées
 */
function loadImages() {

    var ctx = cv.getContext("2d");
    var width = cv.offsetWidth / nbColumns;
    var heigth = cv.offsetHeight / nbRows;

    imgNinja = new Image();
    imgNinja.src = 'img/test.bmp';
    imgNinja.onload = function() {
        drawObstacle(ctx, nbRows, nbColumns, width, heigth);
    };
    imgBullet = new Image();
    imgBullet.src = 'img/bullet.bmp';
    imgBullet.onload = function() {
        drawBullet(ctx, nbRows, nbColumns, width, heigth);
    };
    imgSanta = new Image();
    imgSanta.src = 'img/santa.bmp';
    imgSanta.onload = function() {
        drawSanta(ctx, nbRows, nbColumns, width, heigth);
    };
}

/*
 * Charge / Update un nouveau jeu
 */
function updateGame(game) {
    gridGame = game;
    nbColumns = gridGame.map[0].columns.length;
    nbRows = gridGame.map.length;
}

function drawObstacle(ctx, rows, cols, width, height) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (gridGame.map[i].columns[j].type === "obstacle")
                ctx.drawImage(imgNinja, i * width, j * height, width, height);
        }
    }
}

function drawBullet(ctx, rows, cols, width, height) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (gridGame.map[i].columns[j].type === "bullet")
                ctx.drawImage(imgBullet, i * width, j * height, width, height);
        }
    }
}

function drawSanta(ctx, rows, cols, width, height) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (gridGame.map[i].columns[j].type === "santa")
                ctx.drawImage(imgSanta, i * width, j * height, width, height);
        }
    }
}

/*
 * Met le canvas à la taille de la fenetre
 * Appelé lors du resize aussi
 */
function setSizeCanvas() {
    var ctx = cv.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    loadImages();
}


function controleKey() {
    switch (evt.keyCode) {
        case 37:
            // Left arrow.    
            break;
        case 38:
            // Up arrow.
            break;
        case 39:
            // Right arrow.
            break;
        case 32:
            // Space
            break;
    }
}

var truc = {
    "map": [{
            "row": "0",
            "columns": [
                {"id": "0", "lvl": "0", "type": "obstacle", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]
        },
        {
            "row": "1",
            "columns": [
                {"id": "0", "lvl": "0", "type": "obstacle", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "bullet", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"}
            ]

        },
        {
            "row": "2",
            "columns": [
                {"id": "0", "lvl": "0", "type": "obstacle", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "1", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "2", "lvl": "0", "type": "vide", "clock": "0", "img": "/img/truc.jpg"},
                {"id": "3", "lvl": "0", "type": "santa", "clock": "0", "img": "/img/truc.jpg"}
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

/* ========================================================== */

window.addEventListener('keydown', controleKey, true);
window.addEventListener('resize', setSizeCanvas, true);

updateGame(truc);
setSizeCanvas();

gridGame.map[0].columns[3].type = "obstacle";
gridGame.map[1].columns[3].type = "santa";