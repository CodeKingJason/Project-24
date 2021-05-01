
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,680,800,20);
	
	hammer1 = new Hammer(400,333)

	stone1 = new Stone(123,233,100,100);

	stone2 = new Stone(123,233,80,100);

	rubber1 = new Rubber(123,233);
	rubber2 = new Rubber(123,233);
	rubber3 = new Rubber(123,233);
	
	iron1 = new Iron(500,500,30,30);
	iron2 = new Iron(500,500,30,30);
	iron3 = new Iron(500,500,30,30);
	iron4 = new Iron(500,500,30,30);
	iron5 = new Iron(500,500,30,30);
	iron6 = new Iron(500,500,30,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();

  hammer1.display();
  stone1.display();
  stone2.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  
  iron1.display();
  iron2.display();
  iron3.display();
  iron4.display();
  iron5.display();
  iron6.display();
 
}



