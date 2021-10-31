const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground,ball
var engine,world




function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world

  var propiedadesdeworld={

    isStatic: true
  }
  ground = Bodies.rectangle(400,380,800,20,propiedadesdeworld)
  World.add(world,ground);

  var propiedadesdeball={

    restitution: 1.0
  }
  ball = Bodies.circle(400,100,20,propiedadesdeball)
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}

