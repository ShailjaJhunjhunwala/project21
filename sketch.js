var bullet,wall;
var speed,weight,thikness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 50, 50, 20);
  bullet.shapeColor = color("white")
  wall = createSprite(1200,200,thikness,height+2)
  wall.shapeColor = color(80,80,80)
  bulletSpeed = (speed = random(223,321))
  bulletWeight = (weight = random(400,1500))
  thikness = random(30,52)
}

function draw() {
  background(0); 
  bullet.velocityX = speed 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0
    var deformation = ((0.5*weight*speed*speed)/22500)
    if(deformation > 180){
      bullet.shapeColor = color(255,0,0)
    }
    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = color(230,230,0)
    }
    if(deformation < 100){ 
      bullet.shapeColor = color(0,255,0)
    }
  } 
  var damage = ((0.5*bulletWeight*bulletSpeed*bulletSpeed)/thikness*thikness*thikness)
  if(damage <=  10){
    wall.shapeColor = color("green")
    damage = 3.68
    bulletWeight = 32
    bulletSpeed = 223
    thikness = 70
    bullet.velocityX = 0
  }
  if(damage >= 10){
    wall.shapeColor = color("red")
    damage = 12.43
    bulletWeight = 32
    bulletSpeed = 223
    thikness = 40
  }
  drawSprites();
}