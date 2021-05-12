const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rectangle;
var ball;
var ground;

function setup() {
  var canvas = createCanvas(900,600);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {

    isStatic : true,

  }

  ground = Bodies.rectangle(450,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {

    restitution : 1,

  }

  ball = Bodies.circle(450,100,20,ball_options);
  World.add(world, ball);
  
  console.log(ground);

}

function draw() {
  background("black");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 1000,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();

}