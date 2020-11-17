var car;
var wall;
var speed;
var weight;
var deformation;
var bus, car1, lorry, truck, auto, wall2

function preload(){
bus = loadImage("bus.png")
car1 = loadImage("car.png")
lorry = loadImage("lorry.png")
truck = loadImage("truck.png")
auto = loadImage("auto.png")
wall2 = loadImage("wall.png")

}

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.addImage(wall2)
  wall.scale = 1.5

  deformation = (0.5*weight*speed*speed)/22500;

  car.debug = true;

  var rand = Math.round(random(1,5));
    if(rand === 1){
      car.addImage(bus)
      car.scale = 1.5;
      car.setCollider("circle", 0, 0, 200)
    }
    if(rand === 2){
      car.addImage(car1)
    }
    if(rand === 3){
      car.addImage(lorry)
      //car.setCollider("circle", 50, 0, 150)
    }
    if(rand === 4){
      car.addImage(truck)
      car.setCollider("circle", 50, 0, 150)
    }
    if(rand === 5){
      car.addImage(auto)
      //car.setCollider("circle", 50, 0, 150)
    }
 
    console.log(car.y);

}

function draw() {
  background(255,255,255);

  if(wall.x - car.x < (car.width+wall.width)/2){
     car.velocityX = 0;
    if(deformation<180&&deformation>80){
      background(255, 0, 0);
      
    }
    if(deformation>180){
      background(230, 230, 0);
      
    }
    if(deformation<100){
      background(0, 255, 0);
      
    }
  }
  
  drawSprites();
}