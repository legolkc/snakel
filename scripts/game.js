var mainMusic = document.getElementById("main_music"),
    foodMusic = document.getElementById("food"),
    goMusic = document.getElementById("gameOver");

var files = [mainMusic, foodMusic, goMusic];
var counter = 0;


var f = new Food(snake.size);

function init() {
    mainMusic.play();
    menu.style.zIndex = "-1";

    reset();
}



function reset() {
   
    var f = new Food();
	
	return;
}

function draw() {
    
    snake.updateSnake();

    //Draw food
    f.draw();
    
}

