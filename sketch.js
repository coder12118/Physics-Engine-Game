const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon, polygonImg;
var minion, minionImg;
var panda, pandaImg;
var kai, kaiImg;
var score = 0;

function preload(){
    //polygonImg = loadImage('polygon.png');
    minionImg = loadImage('minion.png');
    kaiImg = loadImage('kai.png');
}

function setup(){
    createCanvas(1000, 500)
    
    engine = Engine.create();
    world = engine.world

    var poly_options = {
        restitution: 0.5,
        density: 1
    }
    polygon = Bodies.circle(50, 200, 20,poly_options)
    World.add(world, polygon)
    slingshot = new Slingshot(this.polygon,{x:50, y:200});

    ground1 = new Ground(500, 495, 1000, 10);
    ground2 = new Ground(400, 270, 250, 10);
    ground3 = new Ground(700, 270, 200, 10);

    panda1 = new Panda(400, 245, 40, 40);
    panda2 = new Panda( 430, 245, 40, 40);
    panda3 =  new Panda(460, 245, 40, 40);
    panda4 = new Panda(490, 245, 40, 40);
    panda5 = new Panda(370, 245, 40, 40);
    panda6 = new Panda(340, 245, 40, 40);
    panda7 = new Panda(310, 245, 40, 40);

    minion1 = new Minion(700, 245, 40, 40);
    minion2 = new Minion(730, 245, 40, 40);
    minion3 = new Minion(760, 245, 40, 40);
    minion4 = new Minion(670, 245, 40, 40);
    minion5 = new Minion(640, 245, 40, 40);

}

function draw(){
    background("black");

    text(mouseX + ", " + mouseY, 100, 30)
    Engine.update(engine);

    imageMode(CENTER)
    image(kaiImg, this.polygon.position.x, this.polygon.position.y, 40, 40);
    //image(pandaImg, 400, 245, 40, 40);
    /*image(pandaImg, 430, 245, 40, 40);
    image(pandaImg, 460, 245, 40, 40);
    image(pandaImg, 490, 245, 40, 40);
    image(pandaImg, 370, 245, 40, 40);
    image(pandaImg, 340, 245, 40, 40);
    image(pandaImg, 310, 245, 40, 40);
    image(pandaImg, 400, 205, 40, 40);
    image(pandaImg, 370, 205, 40, 40);
    image(pandaImg, 340, 205, 40, 40);
    image(pandaImg, 430, 205, 40, 40);
    image(pandaImg, 460, 205, 40, 40);*/

    /*image(minionImg, 700, 245, 40, 40);
    image(minionImg, 730, 245, 40, 40);
    image(minionImg, 760, 245, 40, 40);
    image(minionImg, 670, 245, 40, 40);
    image(minionImg, 640, 245, 40, 40);
    image(minionImg, 700, 205, 40, 40);
    image(minionImg, 730, 205, 40, 40);
    image(minionImg, 670, 205, 40, 40);*/
    //polygonImg.x = kaiImg.x;
    //polygonImg.y = kaiImg.y;

    slingshot.display();

    ground1.display();
    ground2.display();
    ground3.display();

    panda1.display();
    panda2.display();
    panda3.display();
    panda4.display();
    panda5.display();
    panda6.display();
    panda7.display();

    minion1.display();
    minion2.display();
    minion3.display();
    minion4.display();
    minion5.display();
    
fill("white")
textSize(15)
text("Drag the Kai and Release him, to Launch it towards the Pandas and Minions", 280, 50);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}