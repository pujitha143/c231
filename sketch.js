const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1,box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  box1 = new Box(300,250,30,30);
  box2= new Box(150,200,50,80);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
   
}