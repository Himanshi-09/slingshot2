const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block1;

function setup() {
  createCanvas(1000,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(420,360,300,15);
  ground2 = new Ground(750,300,250,15);
   
  ball1 = new Ball(200,200,40,40);
  
  slingshot = new SlingShot(ball1.body,{x:210,y:210});

  block1 = new Block(320,300,40,50);
  block2 = new Block(360,300,40,50);
  block3 = new Block(400,300,40,50);
  block4 = new Block(440,300,40,50);
  block5 = new Block(480,300,40,50);
  block6 = new Block(520,300,40,50);
  block7 = new Block(340,200,40,50);
  block8 = new Block(380,200,40,50);
  block9 = new Block(420,200,40,50);
  block10 = new Block(460,200,40,50);
  block11 = new Block(500,200,40,50);
  block12 = new Block(360,150,40,50);
  block13 = new Block(400,150,40,50);
  block14 = new Block(440,150,40,50);
  block15 = new Block(480,150,40,50);
  block16 = new Block(380,100,40,50);
  block17 = new Block(420,100,40,50);
  block18 = new Block(460,100,40,50);
  block19 = new Block(400,50,40,50);
  block20 = new Block(440,50,40,50);
  block21 = new Block(670,250,40,50);
  block22 = new Block(710,250,40,50);
  block23 = new Block(750,250,40,50);
  block24 = new Block(790,250,40,50);
  block25 = new Block(830,250,40,50);
  block26 = new Block(690,200,40,50);
  block27 = new Block(730,200,40,50);
  block28 = new Block(770,200,40,50);
  block29 = new Block(810,200,40,50);
  block30 = new Block(710,150,40,50);
  block31 = new Block(750,150,40,50);
  block32 = new Block(790,150,40,50);
  block33 = new Block(730,100,40,50);
  block34 = new Block(770,100,40,50);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  ground2.display();

  ball1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  slingshot.display();

//drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingshot.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(ball1.body);
    }
  }