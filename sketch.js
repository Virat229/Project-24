const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var ball
var hammer
var block1;
var block2;
var bounce;

function preload(){
    bounce = loadSound("sound.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,20);

    hammer = new Hammer(500,300);

    stone = new Stone(640,310,70,70);
    sand1 = new Sand(760,370);
   sand2 = new Sand(790,300);
    sand3 = new Sand(780,350);
    sand4 = new Sand(810,370);
    sand5 = new Sand(805,360);
    sand6 = new Sand(815,320);
    sand7 = new Sand(770.380);
    sand8 = new Sand(815,390);
    sand9 = new Sand(820,370);
    sand10 = new Sand(795,385);

    ball = new Ball(300,350);
    block1 = new Iron(600,350);
}
function draw(){
    background(0);
    Engine.update(engine);
    fill ("red");
    textSize(30);
    text("Thank You Mam",200,200);
    if(ball.y > 350){
        bounce.play();
    }
    //console.log(block2);
    hammer.display();
    stone.display();
    ball.display();
    ground.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    block1.display();

}