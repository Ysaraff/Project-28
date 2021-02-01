class Mango{
    constructor(x,y){
        var options ={
            isStatic:true,
        }
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(x,y,25,25,options);
        World.add(world, this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}