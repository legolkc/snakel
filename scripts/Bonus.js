function Bonus(_size){
    this.size = _size;

    this.x = Math.round(Math.random() * (w - this.size) / this.size);
    this.y = Math.round(Math.random() * (h - this.size) / this.size);

    this.draw = function() {
        ctx.fillStyle = "black";

        ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
    }
}
function Bonus1(_size){
    this.size = _size;

    this.x = Math.round(Math.random() * (w - this.size) / this.size);
    this.y = Math.round(Math.random() * (h - this.size) / this.size);

    this.draw = function() {
        ctx.fillStyle = "orange";

        ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
    }
}
function Bonus2(_size){
    this.size = _size;

    this.x = Math.round(Math.random() * (w - this.size) / this.size);
    this.y = Math.round(Math.random() * (h - this.size) / this.size);

    this.draw = function() {
        ctx.fillStyle = "blue";

        ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
    }
}