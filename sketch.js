
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100, 600, 10);

	ground1 = new ground(400, 680, 800, 20);

	dustbin1 = new Dustbin(550, 620, 20, 100);
	dustbin2 = new Dustbin(610, 660, 100, 20);
	dustbin3 = new Dustbin(670, 620, 20, 100);



	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper1.display();

  ground1.display();

  leftside.display();
  bottom.display();
  rightside.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 15, y: -15})
	}
}



