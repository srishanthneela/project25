const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paper;
var boxBase,boxBottomBody,boxleftBody;
var boxleftSprite,boxRightBody,boxRightSprite;
var boxPosition,paperImage,boxBaseImage;

function preload(){
  boxBaseImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1095, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
paper= new Paper(100,200,50,100,500);
paper.scale=0.2;

ground = new Ground(0,height,3200,55);


boxleftSprite=new Box (815,280,20,170);
boxleftSprite.shapeColor=(0);

boxRightSprite=new Box (685,280,20,170);
boxRightSprite.shapeColor=(0);

boxBase=createSprite(750,280,130,20);
boxBase.shapeColor=(green);
boxBase.addImage(boxBaseImage);
boxBase.scale=0.6;

border1= new Border(1090,200,10,400);
border2= new Border(5,200,10,400);
border3= new Border(547,5,1090,10);

	Engine.run(engine);
  
}

function draw() {
  background(166, 166, 166);

  drawSprites();
  paper.display();
  //box.display();
  ground.display();
  boxleftSprite.display();
  boxRightSprite.display();
  boxBase.display();

  border1.display();
  border2.display();
  border3.display();

}

function keyPressed() {
	
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body, paper.body.position,{x:90,y:-90}) 
  }
}


