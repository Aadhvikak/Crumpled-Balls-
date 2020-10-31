
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world; 
var paper1, dustbin1, ground1;


function setup() {
	createCanvas(1500, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,450,40);
	dustbin1 = new Dustbin(1200,650);
	ground1 = new Ground(width/2, 670, width, 20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  paper1.display();
  ground1.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}




