
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyImg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(200,200,200,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImg,125,475,125,175);

  stone1.display();
  
  drawSprites();
 
}