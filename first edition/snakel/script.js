		
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

function showButton() {
	start.style.top = "30%";
	loading.style.top = "5%";
}


		//Initializing Canvas
var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		
		//Full width and height
		w =800,
		h =600;
	
canvas.height = h;
canvas.width = w;





var reset, scoreText,menu, reMenu, score = 0;

function init() {
	mainMusic.play();
	menu.style.zIndex = "-1";
	
	var snake,
			size = 10,
			speed = 5,
			dir,
			game_loop,
			over = 0,
			hitType;
			
	var bot,
			size1 = 5,
			speed1 = 5,
			dir1,
			game_loop1,
			over1 = 0,
			hitType1;
	
	//Custom funny gameover messages
	var msgsSelf = [];
	msgsSelf[0] = "��� ���� ����� ���.�� ��� ��� ����!";
	msgsSelf[1] = "���� ���� ���, ������� ���?";
	msgsSelf[2] = "AArrgghhh!! I bit myself!!";	
	msgsSelf[3] = "Do you have Autophagia?";	
	
	var msgsWall = [];
	msgsWall[0] = "You broke your head!";
	msgsWall[1] = "The wall is stronger than it seems!";
	msgsWall[2] = "There's no way to escape the game...";
	msgsWall[3] = "LOOK MA! NO HEAD..!!";
	msgsWall[4] = "Can't see the wall? Huh?";
/*	
	function playArea() {
		ctx.fillStyle = url('images/trava_grass_gazon_lawn-300x225.png');
		ctx.fillRect(0,0,w,h);
		ctx.fill ();
		
		}
*/		
	function paintCanvas() {
		ctx.fillStyle = "green";		
		ctx.fillRect(0, 0, w, h);
		ctx.clearRect(0, 0, w, h);
		
	
	}

	
		
	var Food = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		
		this.draw = function() {
			ctx.fillStyle = "red";
			
			ctx.fillRect(this.x*size, this.y*size, size, size);
		}
	}
			
			var f = new Food();
	
	
	var maxSpeed = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		
		this.draw = function() {
			
			ctx.fillStyle = "orange";
			
			ctx.fillRect(this.x*size, this.y*size, size, size);
		}
	}
	
			
			var b = new maxSpeed();
			
			
	var minSpeed = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		
		this.draw = function() {
			ctx.fillStyle = "blue";
			
			ctx.fillRect(this.x*size, this.y*size, size, size);
		}
	}
			
			var k = new minSpeed();
			
	var BonusColor = function(){
		this.x = Math.round(Math.random() * (w - size) / size);
		this.y = Math.round(Math.random() * (h - size) / size);
		
		this.draw = function() {
			ctx.fillStyle = "violet";
			
			ctx.fillRect(this.x*size, this.y*size, size, size);
		}
	}
			var t = new BonusColor();
			
	//Initialize the snake
	function initSnake() {
		var length = 10;
		snake = [];
		for(var i = length - 1; i >= 0; i--) {
			snake.push({x: i, y: 0});
		}
	}
	
	function paintSnake() {
		for(var i = 0; i < snake.length; i++) {
			var s = snake[i];
			
			ctx.fillStyle = "white";
			ctx.fillRect(s.x*size, s.y*size, size, size);
			
		}
	}
	

	
	function updateSnake() {
		//Update the position of the snake
		var head_x = snake[0].x;
		var head_y = snake[0].y;
		
		//Get the directions
		document.onkeydown = function(e) {
			var key = e.keyCode;
			//console.log(key);
			
			if(key == 37 && dir != "right") setTimeout(function() {dir = "left"; }, 30);
			else if(key == 38 && dir != "down") setTimeout(function() {dir = "up"; }, 30);
			else if(key == 39 && dir != "left") setTimeout(function() {dir = "right"; }, 30);
			else if(key == 40 && dir != "up") setTimeout(function() {dir = "down"; }, 30);
			else if(key == 80 && dir != "pause") setTimeout(function() {dir = "pause"; }, 30);
			if(key) e.preventDefault();

		}
			
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
			b = new maxSpeed();	
			speed += 5;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed <= 45) speed ++;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		
		//Bonus collision minSpeed
		if(head_x == k.x && head_y == k.y) {
			coll = 1;
			k = new minSpeed();
			speed -= 5;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed <= 45) speed ++;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		
		//Bonus collision ColorBonus
		if(head_x == t.x && head_y == t.y) {
			coll = 1;
			t = new BonusColor();{
			for(var i = 0; i < snake.length; i++) {
				var s = snake[i];
			
				ctx.fillStyle = "blake";
				ctx.fillRect(s.x*size, s.y*size, size, size);
			
			}
	}
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			setTimeout(func, 5000);
			//Increase speed
			if(speed <= 45) speed ++;
			clearInterval(game_loop);
			game_loop = setInterval(draw, 1000/speed);
		}
		
		//Food collision
		if(head_x == f.x && head_y == f.y) {
			coll = 1;
			f = new Food();
			var tail = {x: head_x, y:head_y};
			snake.unshift(tail);	
			score += 10;
			scoreText.innerHTML = "Score: "+score;
			foodMusic.pause();
			foodMusic.currentTime = 0;
			foodMusic.play();
			
			//Increase speed
			if(speed <= 45) speed ++;
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
		t.draw();setTimeout(t.draw, 10000);
	}
	
	reset = function() {
		initSnake();
		f = new Food();
		b = new maxSpeed();
		k = new minSpeed();
		t = new BonusColor();
		reMenu.style.zIndex = "-1"
		dir = "right";
		over = 0;
		speed = 15;
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
	
	function getWinSize() {
    var sizes = {
        'canvas.width':'0',
        'canvas.height':'0'
    };
    if (typeof( window.innerWidth ) == 'number') {

        // not IE
        sizes.canvas.width = window.innerWidth;
        sizes.canvas.height = window.innerHeight;
    } else if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )) {

        // IE 6+
        sizes.canvas.width = document.documentElement.clientWidth;
        sizes.canvas.height = document.documentElement.clientHeight;
    } else if (document.body && ( document.body.clientWidth || document.body.clientHeight )) {

        // IE 4
        sizes.canvas.width = document.body.clientWidth;
        sizes.canvas.height = document.body.clientHeight;
    } else if (0 != arguments.length) {
		var o_canvasID = arguments[0];
		var o_canvas = document.getElementById(o_canvasID);
		window.console.log(o_canvas);
		sizes.canvas.width = o_canvas.getAttribute('width');
        sizes.canvas.height = o_canvas.getAttribute('height');
	}
    return sizes;
}
}


//Menus
function startMenu() {
	menu = document.getElementById("menu");
	reMenu = document.getElementById("reMenu");
	
	scoreText = document.getElementById("score");
	reMenu.style.zIndex = "-1"
}

startMenu();

