class Archer {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.Image = loadImage("./assets/playerArcher.png")

    }

    display(){
        //code to create Archers arm
        push();
        imageMode(CENTER);
        image(this.Image, this.x, this.y, this.width, this.height);
        pop();
    }
}
