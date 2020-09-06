var helicopterIMG, helicopterSprite, packageSprite,packageIMG,BOX1,BOX2,BOX3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 720);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	BOX1=	createSprite(400,670,200,20);
	BOX1.shapeColor=color("red");

	BOX2=	createSprite(290,630,20,100);
	BOX2.shapeColor=("red")

	BOX3=	createSprite(500,630,20,100);
	BOX3.shapeColor=("red")
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 BOX1= Bodies.rectangle(400,670,5,{restitution:3,isStatic:true});
	 
	 World.add(world,BOX1);
	

	BOX2= Bodies.rectangle(290,630,5,{restitution:3,isStatic:true});
    World.add(world,BOX2);

	BOX3= Bodies.rectangle(500,630,5,{restitution:3,isStatic:true});
	World.add(world,BOX3);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(  packageBody, false);
	packageBody.restitution = 0.4
  }
  
}



