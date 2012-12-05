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
        

   	
        
    this.gameover = function() {
		ctx.fillStyle = 'black' ;
		//ctx.fillStyle = url('../images/111.png') ;
		ctx.fillRect(0, 0, w, h);
        //ctx.clearRect(0, 0, w, h);
        clearInterval(snake.game_loop);
       

        
    }
}