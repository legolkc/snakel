function Snake(context) {
    this.ctx = context;
    this.pieces = [];
    this.size = 10,
    this.speed = 5,
    this.dir,
    this.game_loop,
    this.over = 0,
    this.hitType;

    //Initialize the snake
    this.initSnake = function() {
        for(var i = this.size - 1; i >= 0; i--) {
            this.pieces.push({x: i, y: 0});
        }
    }

    this.paintSnake = function() {
        for(var i = 0; i < this.pieces.length; i++) {
            var s = this.pieces[i];

            ctx.fillStyle = "white";
            ctx.fillRect(s.x*this.size, s.y*this.size, this.size, this.size);

        }
    }
	
    this.updateSnake = function() {
        //Get the directions
        document.onkeydown = function (e) {
            var key = e.keyCode;

            if(key === 37 && this.dir != "right"){
                setTimeout(function() {this.dir = "left"; }, 30);
            }
            if(key === 38 && this.dir != "down") {
                setTimeout(function() {this.dir = "up"; }, 30);
            }
            if(key === 39 && this.dir != "left") {
                setTimeout(function() {this.dir = "right"; }, 30);
            }
            if(key === 40 && this.dir != "up") {
                setTimeout(function() {this.dir = "down"; }, 30);
            }

            if(key) e.preventDefault();

        }

        //Update the position of the snake
        var head_x = this.pieces[0].x;
        var head_y = this.pieces[0].y;

        //Directions
        if(this.dir == "right") head_x++;
        else if(this.dir == "left") head_x--;
        else if(this.dir == "up") head_y--;
        else if(this.dir == "down") head_y++;

        //Move snake
        var tail = this.pieces.pop();
        tail.x = head_x;
        tail.y = head_y;
        this.pieces.unshift(tail);

        //Wall Collision
        if(head_x >= w/this.size || head_x <= -1 || head_y >= h/this.size || head_y <= -1) {
            if(this.over == 0) {
                this.hitType = "wall";
                this.gameover();
            }
            this.over++;
        }



        //Food collision
        if(head_x == f.x && head_y == f.y) {
            coll = 1;
            f = new Food(this.size);
            var tail = {x: head_x, y:head_y};
			this.pieces.unshift(tail);
			//snake.unshift(tail);
            score += 10;
            scoreText.innerHTML = "Score: "+score;
            foodMusic.pause();
            foodMusic.currentTime = 0;
            foodMusic.play();

            //Increase speed
            if(this.speed <= 45) this.speed ++;
            clearInterval(this.game_loop);
            this.game_loop = setInterval(draw, 1000/this.speed);
        }
		
		
		//Bonus collision
        if(head_x == f1.x && head_y == f1.y) {
            coll = 1;
            f1 = new Bonus(this.size);
            var tail = {x: head_x, y:head_y};
            //this.pieces.unshift(tail);
            //score += 10;
			speed += 5;
            scoreText.innerHTML = "Score: "+score;
            foodMusic.pause();
            foodMusic.currentTime = 0;head_x
            foodMusic.play();

            //Increase speed
            if(this.speed <= 45) this.speed ++;
            clearInterval(this.game_loop);
            this.game_loop = setInterval(draw, 1000/this.speed);
        }

		
		//Bonus1 collision
        if(head_x == f2.x && head_y == f2.y) {
            coll = 1;
            f2 = new Bonus1(this.size);
            var tail = {x: head_x, y:head_y};
            //this.pieces.unshift(tail);
            //score += 10;
			speed -= 5;
            scoreText.innerHTML = "Score: "+score;
            foodMusic.pause();
            foodMusic.currentTime = 0;head_x
            foodMusic.play();

            //Increase speed
            if(this.speed <= 45) this.speed ++;
            clearInterval(this.game_loop);
            this.game_loop = setInterval(draw, 1000/this.speed);
        }
		
		//Bonus2 collision
        if(head_x == f3.x && head_y == f3.y) {
            coll = 1;
            f3 = new Bonus2(this.size);
            var tail = {x: head_x, y:head_y};
            //this.pieces.unshift(tail);	
            score += 50;
            scoreText.innerHTML = "Score: "+score;
            foodMusic.pause();
            foodMusic.currentTime = 0;head_x
            foodMusic.play();

            //Increase speed
            if(this.speed <= 45) this.speed ++;
            clearInterval(this.game_loop);
            this.game_loop = setInterval(draw, 1000/this.speed);
        }
		
		
        else {
            //Check collision between snake parts
            for(var j = 1; j < this.pieces.length; j++) {
                var s = this.pieces[j];
                if(head_x == s.x && head_y == s.y) {
                    if(this.over == 0) {
                        hitType = "self";
                        this.gameover();
                    }
                    this.over++;
                }
            }
        }
    }

   	
        
    this.gameover = function() {
		//ctx.fillStyle = 'black' ;
		//ctx.fillStyle = url('../images/111.png') ;
		//ctx.fillRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h);
        clearInterval(snake.game_loop);
		mainMusic.pause();
        goMusic.play();

        //Get the gameover text
        var goText = document.getElementById("info2");

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

        //Show the messages
        if(this.hitType == "wall") {
            goText.innerHTML = msgsWall[Math.floor(Math.random() * msgsWall.length)];
        }
        else if(this.hitType == "self") {
            goText.innerHTML = msgsSelf[Math.floor(Math.random() * msgsSelf.length)];
        }

        reMenu.style.zIndex = "1";   
    }
}