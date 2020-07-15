
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 1000);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	bobject1=new bob(200,400,50,50)
	bobject2=new bob(300,400,50,50)
	bobject3=new bob(400,400,50,50)
	bobject4=new bob(500,400,50,50)
	bobject5=new bob(600,400,50,50)
	roof1=new roof(400,200,500,20)
	rope1=new rope(bobject1.body,roof1.body,-200,0);
	rope2=new rope(bobject2.body,roof1.body,-100,0);
	rope3=new rope(bobject3.body,roof1.body,0,0);
	rope4=new rope(bobject4.body,roof1.body,100,0);
	rope5=new rope(bobject5.body,roof1.body,200,0);
	
}


function draw() {
  rectMode(CENTER);
  background(200);
  roof1.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bobject1.display()
  
  bobject2.display()
  bobject3.display()
  bobject4.display()
  bobject5.display()
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobject5.body,bobject5.body.position,{x:100,y:1});
	keyCode=DOWN_ARROW
  }
  if(bobject5.body.position.x<585){
	Matter.Body.applyForce(bobject1.body,bobject1.body.position,{x:-50,y:1});
	  
  }
  if(bobject1.body.position.x>200){
	Matter.Body.applyForce(bobject5.body,bobject5.body.position,{x:50,y:1});
	  
  }
  
  drawSprites();
 
}



