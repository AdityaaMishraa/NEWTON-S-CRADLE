
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	base=new Base(width/2,100,500,40)
	bob1=new Bob(width/2-200,500);
	bob2=new Bob(width/2-100,500);
	bob3=new Bob(width/2,500);
	bob4=new Bob(width/2+100,500);
	bob5=new Bob(width/2+200,500);
	chain1=new Chain(bob1.body,base.body,-200,0);
	chain2=new Chain(bob2.body,base.body,-100,0);
	chain3=new Chain(bob3.body,base.body,0,0);
	chain4=new Chain(bob4.body,base.body,100,0);
	chain5=new Chain(bob5.body,base.body,200,0);
	World.add(world,chain3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);

  base.display();

  chain1.display();
  chain2.display();	
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}

function newFunction() {
	
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:0});
	}
	
	if (keyCode === RIGHT_ARROW) {
		Body.applyForce(bob5.body, bob5.body.position, { x: 400, y: 0 });
	}
}