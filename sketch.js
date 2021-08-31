const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, cannonball;
var bgimg 

var balls = []



function preload() {
  towerImage = loadImage("./assets/tower.png");
bgimg = loadImage("./assets/background.gif")

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  angle = -PI/4
  cannon = new Cannon(180,110,100,50,angle)
  
}

function draw() {
  background(189);
  image(bgimg,0,0,width,height)
  Engine.update(engine);


  ground.display();
  
  for(var i = 0 ; i<balls.length; i++){
    showcannonballs(balls[i],i)
  }

  tower.display();
  cannon.display();
 
  //cannonball.display();
}

function keyReleased(){
  
  if(keyCode === DOWN_ARROW){
    
    //cannonball.shoot()
    balls[balls.length-1].shoot()
    
  }
}
function showcannonballs (ball,index){
  ball.display()
  if(ball.body.position.x>=width||ball.body.position.y>=height-50){
    Matter.World.remove(world,ball.body)
    balls.splice(index,1)
  }
}

function keyPressed (){
  cannonball = new CannonBall(cannon.x,cannon.y)
  balls.push (cannonball)
}






