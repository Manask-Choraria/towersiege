const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var world , engine,polygonImg
var score = 0
var gameState = "onSling"
function preload(){
  polygonImg = loadImage("polygon.png");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,height,800,20)
  stand = new Ground (390,265,200,10)
  box1 = new Box (330,235,30,40)
  box2 = new Box (360,235,30,40)
  box3 = new Box (390,235,30,40)
  box4 = new Box (420,235,30,40)
  box5 = new Box (450,235,30,40)
  box6 = new Box (360,195,30,40)
  box7 = new Box (390,195,30,40)
  box8 = new Box (420,195,30,40)
  box9 = new Box (390,145,30,40)
  var options = {
    density : 1.5,
    restitution : 0.9
  }

  block = Bodies.circle(50,150,40,options)
  World.add(world,block)
  slingshot = new SlingShot(block,{x:50,y:150})

}

function draw() {
  background(255,255,255);  
  text("SCORE " + score,700,40)
  Engine.update(engine)
  image(polygonImg,block.position.x,block.position.y,40,40)
  ground.display();
  fill("crimson");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score()
  box9.score();
  stand.display();
  slingshot.display();

}
function mouseDragged(){
  if(gameState !== "launched"){
  Matter.Body.setPosition(block,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  slingshot.fly()
  gameState = "launched"
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(block)
    gameState = "onSling"
  }
}