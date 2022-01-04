const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


  var snowFlake = [];

  var world;
  var engine;




function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();

  world = engine.world;

 
  
}

function draw() {
  background("black");
  textSize(20) 

  Engine.update(engine);

  if(frameCount%10===0){
    snowFlake.push(new Snow(random(10,800),30,10))
  }

  for (var k = 0; k < snowFlake.length; k++) {
    snowFlake[k].display();
  }
  

  
 // drawSprites();
}


