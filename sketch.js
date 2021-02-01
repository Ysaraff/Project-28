
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
boyImg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone();

	mango1 = new Mango(500,450);
	mango2 = new Mango(575,400);
	mango3 = new Mango(650,325);
	mango4 = new Mango(725,425);

	chain = new Constraints(stone1.body,{x:120,y:470});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImg,125,475,125,175);

  stone1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  drawSprites();

  detectCollision(stone1.body,mango1);

 
}
function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.fly();
}
function detectCollision(){
	
}