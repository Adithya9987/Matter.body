
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	 leftside=new ground(1100,600,20,120);
	 rightside = new ground(1100,600,10,120);

	//Create the Bodies Here.
	Matter.Bodies.circle(200,100,20,ball_options);
	World.add(world,ball)

	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  
	Matter.Bodies.circle()
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

 groundObj.display();
}

function keypressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.appleForce(ball,{x:0,y:0,{x:0.05,y:0}}
	}
}


