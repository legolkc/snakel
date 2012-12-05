var mainMusic = document.getElementById("main_music"),
    foodMusic = document.getElementById("food"),
    goMusic = document.getElementById("gameOver");

var files = [mainMusic, foodMusic, goMusic];
var counter = 0;

var start = document.getElementById("start");
loading = document.getElementById("loading");

for(var i = 0; i < files.length; i++) {
    var file = files[i];
    file.addEventListener("loadeddata", function() {
        counter++;
        var percent = Math.floor((counter/files.length)*100);
        loading.innerHTML = "Loading " + percent + "%";
        if(percent == 100) showButton();
    });
}

//Initializing Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Full width and height
var w =800;
var h =600;

canvas.height = h;
canvas.width = w;

var snake = new Snake(ctx);
var bot = new Bot();


var scoreText;
var score = 0;
var reset;

var f = new Food(snake.size);

function init() {
    mainMusic.play();
    menu.style.zIndex = "-1";

    reset();
}

function paintCanvas() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
}

function showButton() {
    start.style.top = "30%";
    loading.style.top = "5%";
}

//Menus
function startMenu() {
	 var menu = document.getElementById("menu");
	 var reMenu = document.getElementById("reMenu");

    this.scoreText = document.getElementById("score");
    this.reMenu.style.zIndex = "-1";
}

function reset() {
	snake = new Snake(ctx);
	snake.initSnake();
    var f = new Food();
	
	this.reMenu.style.zIndex = "-1";
    snake.dir = "right";
    snake.over = 0;
    snake.speed = 15;
    if(typeof snake.game_loop != "undefined")  clearInterval(snake.game_loop);
    snake.game_loop = setInterval(draw, 1000/snake.speed);

    score = 0;
    scoreText.innerHTML = "Score: "+score;
    mainMusic.currentTime = 0;
    mainMusic.play();
	
	return;
}

function draw() {
    this.paintCanvas();
    snake.paintSnake();
    snake.updateSnake();

    //Draw food
    f.draw();
    
}

startMenu();