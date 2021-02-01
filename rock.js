class Stone{
    constructor(){
        var options = {
           // isStatic: true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(125,500,50,50,options);
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/stone.png");
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}