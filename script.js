
		
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
		
		f.draw();
		b.draw();
		k.draw();
		t.draw();
		
	}
	
	