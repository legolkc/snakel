function Food(_size){
    this.size = _size;

    this.x = Math.round(Math.random() * (w - this.size) / this.size);
    this.y = Math.round(Math.random() * (h - this.size) / this.size);

    this.draw = function() {
        ctx.fillStyle = "red";

        ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
    }
}