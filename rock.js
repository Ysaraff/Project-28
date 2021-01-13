class Stone{
    constructor(){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/stone.png");
    }
    display(){
        image(this.image,200,200,100,100);
    }
}