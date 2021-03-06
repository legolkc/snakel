﻿document.ontouchstart = function(event) 
{ 
	event.preventDefault();
};		
		var mainMusic = document.getElementById("main_music"),
		foodMusic = document.getElementById("food"), 
		goMusic = document.getElementById("gameOver");

var files = [mainMusic, foodMusic, goMusic];
var counter = 0;

window.captureEvents(Event.CLICK);
		
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

function showButton() {
	start.style.top = "3%";
	loading.style.top = "1%";
}


		//Initializing Canvas
var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		
		//Full width and height
		w =canvas.height,
		h =canvas.width/2;
	
canvas.height = h;
canvas.width = w;

var reset, scoreText,menu, reMenu, score = 0;

function init() {
	mainMusic.play();
	menu.style.zIndex = "-1";
	
	var snake,
			size = 8,
			size_food = 8,
			size_minSpeed = 8,
			size_maxSpeed = 8,
			size_BonusColor = 8,
			size_st = 8,
			size_vr = 8,
			speed = 8,
			dir,
			game_loop,
			over = 0,
			hitType;
			
	var bot,
			size1 = 8,
			speed1 = 8,
			dir1,
			game_loop1,
			over1 = 0,
			hitType1;
	
	//Custom funny gameover messages
	var msgsSelf = [];
        msgsSelf[0] = "Там есть много еды.Не ешь сам себя!";
        msgsSelf[1] = "Твое тело что, вкуснее еды?";
        msgsSelf[2] = "В рот тебе хвост!!!";
        msgsSelf[3] = "У тебя что, болезнь самопоедания?";

        var msgsWall = [];
        msgsWall[0] = "Ты считаешь что твоя голова крепче стены?";
        msgsWall[1] = "СМОТРИТЕ ВСЕ!!!НЕТ ГОЛОВЫ!!!";
        msgsWall[2] = "Ну сколько можно таранить стены?!";
        msgsWall[3] = "Голова в дребезги!";
        msgsWall[4] = "Не видишь стену?БАХ!";
		
	function paintCanvas() {
		ctx.fillStyle = "green";		
		ctx.fillRect(0, 0, w, h);
		ctx.clearRect(0, 0, w, h);
		
	
	}

	
		
	var Food = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		food.image = new Image();
		food.image.src = 'images/apple.png';
		this.draw = function() {
			ctx.drawImage(food.image, this.x*size, this.y*size, size_food, size_food);
			if (size_food > 2){
					size_food -= 0.1;
			}
			else {
			size_food = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			Food();
			}
		}
	}
			
			var f = new Food();
	
	
	var maxSpeed = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		maxSpeed.image = new Image();
		maxSpeed.image.src = 'images/speedMax.png';
		this.draw = function() {
			
			ctx.drawImage(maxSpeed.image, this.x*size, this.y*size, size, size);
			
			if (size_maxSpeed > 2){
					size_maxSpeed -= 0.1;
			}
			else {
			size_maxSpeed = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			maxSpeed();
			}
		}
	}
	
			
			var b = new maxSpeed();
			
			
	var minSpeed = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		minSpeed.image = new Image();
		minSpeed.image.src = 'images/minSpeed_.png';
		
		this.draw = function() {
			ctx.drawImage(minSpeed.image, this.x*size, this.y*size, size, size);
			
			if (size_minSpeed > 2){
					size_minSpeed -= 0.1;
			}
			else {
			size_minSpeed = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			minSpeed();
			}
		}
	}
			
			var k = new minSpeed();
			
	var BonusColor = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		BonusColor.image = new Image();
		BonusColor.image.src = 'images/5_0.png';
		this.draw = function() {
			ctx.drawImage(BonusColor.image, this.x*size, this.y*size, size_BonusColor, size_BonusColor);
			
			if (size_BonusColor > 2){
					size_BonusColor -= 0.1;
			}
			else {
			size_BonusColor = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			BonusColor();
			}
		}
	}
			var t = new BonusColor();
			
		var stena = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		stena.image = new Image();
		stena.image.src = 'images/borts.png';
		
		this.draw = function() {
			
			ctx.drawImage(stena.image, this.x*size, this.y*size, size_st, size_st);
			if (size_st> 2){
					size_st -= 0.1;
			}
			else {
			size_st = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			stena();
			}
		}
	}

			var st = new stena();
			
			var vrag = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		vrag.image = new Image();
		vrag.image.src = 'images/vrag.png';
		
		this.draw = function() {
			
			ctx.drawImage(vrag.image, this.x*size, this.y*size, size_vr, size_vr);
			if (size_vr> 2){
					size_vr -= 0.1;
			}
			else {
			size_vr = 8;
			this.x = Math.round(Math.random() * (w - size) / size);
			this.y = Math.round(Math.random() * (h - size) / size);
			vrag();
			}
		}
		//}
	}

			var vr = new vrag();
			
	//Initialize the snake
	function initSnake() {
		var length = 1;
		snake = [];
		for(var i = length - 1; i >= 0; i--) {
			snake.push({x: i, y: 5});
		}
	}
	
	function paintSnake() {
	
		for(var i = 0; i < snake.length; i++) {
			var s = snake[i];
			s.image = new Image();
		    s.image.src = 'images/snake.png';
			ctx.drawImage(s.image, s.x*size, s.y*size, size, size);
			
		}
	}
	
$('#canvas').mousedown(function(e) {
		if( e.pageX < (ctx.canvas.width+500)/2 )
		{
			if( dir == "down" ) dir = "right";
			else if( dir == "right" ) dir = "up";
			else if( dir == "up" ) dir = "left";
			else if( dir == "left" ) dir = "down";
		}
		else
		{
			if( dir == "down" ) dir = "left";
			else if( dir == "right" ) dir = "down";
			else if( dir == "up" ) dir = "right";
			else if( dir == "left" ) dir = "up";
		}
    });
	
	document.body.addEventListener('touchstart',function(e) {
	
	    if( e.touches[0].pageX < (ctx.canvas.width+500)/2 )
		{
			if( dir == "down" ) dir = "right";
			else if( dir == "right" ) dir = "up";
			else if( dir == "up" ) dir = "left";
			else if( dir == "left" ) dir = "down";
		}
		else
		{
			if( dir == "down" ) dir = "left";
			else if( dir == "right" ) dir = "down";
			else if( dir == "up" ) dir = "right";
			else if( dir == "left" ) dir = "up";
		}
	});
	
	function updateSnake() {
		//Update the position of the snake
		var head_x = snake[0].x;
		var head_y = snake[0].y;
		
/////////Управление мышкой		
function Move()
{
	this.left = function()
	{
		if(direction != 2)
		{
			direction = 4;
			head_x = head_x - size;
			if(head_x < 0)
			 {
				hitType = "self";
				gameover();
			 }
			drawSnake();
		}
	};

	this.right = function()
	{
		if(direction !=4 )
		{
			direction = 2;
			head_x = head_x + size;
			if(head_x  >= w)
			 {
				hitType = "self";
				gameover();
			 }
			drawSnake();
		}
	};

	this.up = function()
	{
		if(direction != 3)
		{
			direction = 1;
			head_y = head_y - size;
			if(head_y < 0)
			 {
				hitType = "self";
				gameover();
			 }

			drawSnake();
		}
	};
	
	this.down = function()
	{
		if(direction != 1)
		{
			direction = 3;
			head_y = head_y + size;
			if(head_y >=  h)
			 {
				hitType = "self";
				gameover();
			 }
			drawSnake();
		}
	};
	
	//keep moving
	this.slither = function()
	{
		switch(direction)
		{
			case 1: snake.up(); break;
			case 2: snake.right(); break;
			case 3: snake.down(); break;
			case 4: snake.left(); break;
			default: break;
		}
	};
	
	this.trip = function(body)
	{
		return (body[0] == head_x && body[1] == head_y);  
	};
}
	//keyboard controls
function keyBoardControl(event)
{
	var keyCode;
	if(event == null)
	{
		keyCode = window.event.keyCode;
	}
	else
	{
		keyCode = event.keyCode;
	}
	switch(keyCode)
	{
		case 37: snake.left(); break; 
		case 38: snake.up(); break;
		case 39: snake.right(); break;
		case 40: snake.down(); break; 
		default: break;
	}
}

//keyboard controls
function mouseControl(event)
{

		moveX = event.layerX;
		moveY = event.layerY;
	
	if (direction == 1 || direction == 3)
	{
		if(moveX > head_x) 
			snake.right(); 
		else
			snake.left();
	}
	// else direction is left or right!
	else
	{
		if(moveY > head_y)
		 	snake.down();
		else
			snake.up();
	}
	return;	
}
		///////////
		
			//Directions
			if(dir == "right") head_x++;
		else if(dir == "left") head_x--;
		else if(dir == "up") head_y--;
		else if(dir == "down") head_y++;
		else if(dir == "pause") return;
		//Move snake
		var tail = snake.pop();
		tail.x = head_x;
		tail.y = head_y;
		snake.unshift(tail);
		 
		//Wall Collision
		if(head_x >= w/size || head_x <= -1 || head_y >= h/size || head_y <= -1) {					
			if(over == 0) {
				hitType = "wall";
				gameover();
			}
			over++
		}
				
		//Bonus collision maxSpeed
		if(head_x == b.x && head_y == b.y) {
			coll = 1;
			size_maxSpeed = 8;
			b = new maxSpeed();	
			speed += 2;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		
		//Bonus collision minSpeed
		if(head_x == k.x && head_y == k.y) {
			coll = 1;
			size_minSpeed = 8;
			k = new minSpeed();
			speed -= 2;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		
		//Bonus collision ColorBonus
		if(head_x == t.x && head_y == t.y) {
			coll = 1;
			size_BonusColor = 8;
			t = new BonusColor();
			score += 50;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		//stena
		if(head_x == st.x && head_y == st.y) {
			coll = 1;
			foodMusic.pause();
			hitType = "wall";
			gameover();
			st = new BonusColor();
			scoreText.innerHTML = "Score: "+score;
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		//vrag
		if(head_x == vr.x && head_y == vr.y) {
			coll = 1;
			foodMusic.pause();
			hitType = "wall";
			gameover();
			vr = new Vrag();
			scoreText.innerHTML = "Score: "+score;
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		//Food collision
		if(head_x == f.x && head_y == f.y) {
			coll = 1;
			size_food = 8;
			f = new Food();
			var tail = {x: head_x, y:head_y};
			snake.unshift(tail);	
			score += 10;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed >= 45) speed --;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		else {
			//Check collision between snake parts
			for(var j = 1; j < snake.length; j++) {
				var s = snake[j];
				if(head_x == s.x && head_y == s.y) {
					if(over == 0) {
						hitType = "self";
						gameover(); 
					}
					over++;
				}
			} 
		}
	}
	
	function draw() {
		paintCanvas();
		paintSnake();
		updateSnake();
		
		//Draw food
		f.draw();
		b.draw();
		k.draw();
		t.draw();
		vr.draw();
		st.draw();
		
	}
	
	function drawSnake() {
		paintCanvas();
		paintSnake();
		updateSnake();
	}
	
	reset = function() {
		initSnake();
		size_vr = 8;
		size_st = 8;
		f = new Food();
		b = new maxSpeed();
		k = new minSpeed();
		t = new BonusColor();
		st = new stena();
		vr = new vrag();
		
		reMenu.style.zIndex = "-1"
		dir = "right";
		over = 0;
		speed = 8;
		if(typeof game_loop != "undefined")  clearInterval(game_loop); 
		game_loop = setInterval(draw, 1000/speed);
		

		score = 0;
		scoreText.innerHTML = "Score: "+score;
		mainMusic.currentTime = 0;
		mainMusic.play();
		
		return;
	}
		
		function gameover() {
			ctx.clearRect(0, 0, w, h);
			clearInterval(game_loop);
			mainMusic.pause();
			goMusic.play();
			
						
			//Get the gameover text
			var goText = document.getElementById("info2");
			
			//Show the messages
			if(hitType == "wall") {
				goText.innerHTML = msgsWall[Math.floor(Math.random() * msgsWall.length)];
			}
			else if(hitType == "self") {
				goText.innerHTML = msgsSelf[Math.floor(Math.random() * msgsSelf.length)];
			}
			
			reMenu.style.zIndex = "1";
			
		}
	
	reset();
	

}


//Menus
function startMenu() {
	menu = document.getElementById("menu");
	reMenu = document.getElementById("reMenu");
	
	scoreText = document.getElementById("score");
	reMenu.style.zIndex = "-1"
}

$(function(){
  $("#start").bind("touchstart", function (event) {
    init();
  });
});

startMenu();

