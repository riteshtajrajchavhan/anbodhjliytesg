let gui;
let r;


var time = 1;
var angle = 5;
var once = 5;
var occur = 2;
var beat = 5;//enemy can't beat
var move = 5;//player movement animation
var bullets = 40;//player bullets 
var fire = 5;// enemies can't shoot while player is shooting


var gameState = "start";
var level1 = 1;
var level2 = 2;
var level3 = 3;
var level4 = 4;

function preload(){
playerImg=loadAnimation("image/player.png","image/player-frame2.png","image/playerImg-3.png","image/player4.png");
playerImg2=loadAnimation("image/dan.png","image/lplayer-frame2.png","image/lplayerImg-3.png","image/lplayer4.png");
rightImg=loadImage("image/right.png");
groundImg=loadImage("image/ground.jpg");
drygroundImg=loadImage("image/dryground.png");
groundImg2=loadImage("image/ground2.jpg");
colliderImg=loadImage("image/collider.jpg");
drycolliderImg=loadImage("image/drycollider.png");
waterImg=loadImage("image/water.png");
woodImg=loadImage("image/wood.png");
treeImg=loadImage("image/tree.png");
drytreeImg=loadImage("image/drytree2.png");
beatImg=loadImage("image/beat1.png");
beatImg3=loadImage("image/punch.png");
beatImg2=loadImage("image/lbeat1.png");
beatImg4=loadImage("image/lpunch.png");
enemyImg=loadAnimation("image/enemy.png","image/enemy2.png","image/enemy4.png","image/enemy3.png");
enemyImg2=loadAnimation("image/lenemy.png","image/lenemy2.png","image/lenemy4.png","image/lenemy3.png");
punchSound=loadSound("sound/PUNCH.mp3");
enemySound=loadSound("sound/enemyBeat.mp3");
song=loadSound("sound/song.mp3");
jumpSound=loadSound("sound/Woosh.mp3");
pistolSound=loadSound("sound/fire.mp3");
shootSound=loadSound("sound/shoot.mp3");
enemyBeat=loadAnimation("image/enemy4.png","image/enemyBeat.png","image/enemyBeat.png");
enemyBeat2=loadAnimation("image/lenemy4.png","image/enemyBeat2.png","image/enemyBeat2.png");
spikeImg=loadImage("image/spike.png");
obstacleImg=loadImage("image/obstacle.jpg");
BeamImg=loadImage("image/Beam.png");
leftImg=loadImage("image/left.png");
punchImg=loadImage("image/punchButton.png");
jumpImg=loadImage("image/jump.png");
birdImg=loadAnimation("image/bird.png","image/birdframe2.png");
birdImg2=loadAnimation("image/bird3.png","image/birdframe4.png");
ballImg=loadImage("image/ball.png");
menuImg=loadImage("image/menu.png");
gunenmeyImg=loadAnimation("image/gunenemy.png","image/gunenemy2.png","image/gunenemy3.png");
gunenmeyImg2=loadAnimation("image/rgunenemy.png","image/rgunenemy2.png","image/rgunenemy3.png");
bulletImg=loadImage("image/bullet.png");
bulletImg2=loadImage("image/bullet2.png");
gunImg=loadImage("image/gun.png");
shootImg=loadImage("image/shoot.png");
playergunImg=loadAnimation("image/playershoot2.png","image/rplayershoot.png","image/rplayershoot3.png");
playergunImg2=loadAnimation("image/playershoot.png","image/lplayershoot.png","image/lplayershoot3.png");
foodImg=loadImage("image/food.png");
shortgroundImg=loadImage("image/shortground.png");
backImg=loadImage("image/back.png");
suneoImg=loadAnimation("image/suneo.png","image/suneo2.png","image/suneo3.png");
suneoImg2=loadAnimation("image/rsuneo.png","image/rsuneo2.png","image/rsuneo3.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gui = createGui();

   r = createButton("Button",windowWidth/2-280,windowHeight/2+120, 70, 70);
   l = createButton("Button",windowWidth/2-380,windowHeight/2+120, 70, 70);
   p = createButton("Button",windowWidth/2+310,windowHeight/2+120, 70, 70);
   j = createButton("Button",windowWidth/2+220,windowHeight/2+120, 70, 70);

   levelbutton1 = createButton("Button",windowWidth/2-77,windowHeight/2-90, 150, 70);
   levelbutton2 = createButton("Button",windowWidth/2-70,windowHeight/2+50, 150, 70);
   levelbutton3 = createButton("Button",windowWidth/2-250,windowHeight/2-74, 150, 70);
   levelbutton4 = createButton("Button",windowWidth/2-250,windowHeight/2+50, 150, 70);

   shootbutton = createButton("Button",windowWidth/2+120,windowHeight/2+120, 70, 70);

   hide=createSprite(windowWidth/2,windowHeight/2,1000,600);
   hide.shapeColor="lightblue"
   hide.visible=false;

   menu=createSprite(windowWidth/2,windowHeight/2);
   menu.addImage(menuImg);
   menu.scale=1.6;

   

   // creating js object

   fgroup = createGroup();
   group = createGroup();
   bgroup = createGroup();
   enemygroup = createGroup();
   cgroup = createGroup();
   spikegroup = createGroup();
   bulletgroup = createGroup();
   groundgroup = createGroup()

//song.loop();

}

function draw() {
  background("lightblue");
  drawGui();
   drawSprites();

  
 
if(gameState === "start"){
  
  camera.x=menu.x;
  camera.y=menu.y;

r.visible=false;
l.visible=false;
p.visible=false;
j.visible=false;
shootbutton.visible=false;

hide.visible=false;
menu.visible=true;


if (levelbutton1.isHeld){

  hide.visible=true;

  t1 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
   t2 = new Tree(windowWidth/2+2060,windowHeight/2-80,2.3);
   t3 = new Tree(windowWidth/2+2660,windowHeight/2-80,2.3);
   t4 = new Tree(windowWidth/2+4680,windowHeight/2-80,2.3);
  
   c1 = new collider(windowWidth/2-420,windowHeight/2,0.3)
  
   g1 = new Ground(windowWidth/2+26,windowHeight/2+180,0.3);
   g2 = new Ground2(windowWidth/2+2350,windowHeight/2+180,0.3);
   g3 = new Ground(windowWidth/2+4676,windowHeight/2+180,0.3);
   
   w1 = new Water(windowWidth/2+1035,windowHeight/2+150,1.1);
   w2 = new Water(windowWidth/2+3668,windowHeight/2+150,1.1);
  
   wg1 = new Wood(windowWidth/2+755,windowHeight/2,1.1);
   wg2 = new Wood(windowWidth/2+1205,windowHeight/2,1.1);
   
  
   ob1 = new Obstacle(windowWidth/2+2650,windowHeight/2+15,windowWidth/2+2650,windowHeight/2-285);
   ob2 = new Obstacle(windowWidth/2+2850,windowHeight/2,windowWidth/2+2850,windowHeight/2-279);
  
  e1 = new Enemy(windowWidth/2+400,windowHeight/2);
  e2 = new Enemy(windowWidth/2-300,windowHeight/2);
  e3 = new Enemy(windowWidth/2-200,windowHeight/2);
  e4 = new Enemy(windowWidth/2+200,windowHeight/2);
  e5 = new Enemy(windowWidth/2+2000,windowHeight/2);
  e6 = new Enemy(windowWidth/2+2200,windowHeight/2);
  e7 = new Enemy(windowWidth/2+1900,windowHeight/2);
  e8 = new Enemy(windowWidth/2+2100,windowHeight/2);
  
  bird1 = new Bird(windowWidth/2+4400,windowHeight/2-150);
  bird2 = new Bird(windowWidth/2+4700,windowHeight/2-150);
  
  // simple objects
  
   player=createSprite(windowWidth/2-100,windowHeight/2);
   player.addAnimation("running",playerImg);
    
  health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
  health.shapeColor="lawngreen";
  
  
wall=createSprite(windowWidth/2+400,windowHeight/2,10,700);
wall.visible=false;

wall2=createSprite(windowWidth/2+1650,windowHeight/2,10,700);
wall2.visible=false;


wall3=createSprite(windowWidth/2+2500,windowHeight/2,10,700);
wall3.visible=false;

wall4=createSprite(windowWidth/2+5050,windowHeight/2,20,700);
wall4.visible=false;

extrawall=createSprite(windowWidth/2+4250,windowHeight/2,20,700);
extrawall.visible=false;


  b1=createSprite(windowWidth/2+3500,windowHeight/2);
  b1.addImage(BeamImg);
  b1.scale=0.5;
  b1.velocityX=4;
  fgroup.add(b1);
  
  b2=createSprite(windowWidth/2+4100,windowHeight/2);
  b2.addImage(BeamImg);
  b2.scale=0.5;
  b2.velocityX=4;
  fgroup.add(b2);
  
  rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;


gameState=level1;

}//levelbutton1 over

if (levelbutton2.isHeld){

  hide.visible=true;
  
gameState=level2;

//creating js object

t5 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
t6 = new Tree(windowWidth/2+630,windowHeight/2-80,2.3);
t7 = new Tree(windowWidth/2+2650,windowHeight/2-80,2.3);
t8 = new Tree(windowWidth/2+4650,windowHeight/2-80,2.3);

c2 = new collider(windowWidth/2-420,windowHeight/2,0.3)

w3 = new Water(windowWidth/2+1660,windowHeight/2+150,1.1);
w4 = new Water(windowWidth/2+3650,windowHeight/2+150,1.1);

wg3 = new Wood(windowWidth/2+1350,windowHeight/2,1.1);
wg4 = new Wood(windowWidth/2+1800,windowHeight/2,1.1);
wg5 = new Wood(windowWidth/2+3360,windowHeight/2,1.1);
wg6 = new Wood(windowWidth/2+3800,windowHeight/2,1.1);

g4 = new Ground2(windowWidth/2+342,windowHeight/2+180,0.3);
g5 = new Ground(windowWidth/2+2642,windowHeight/2+180,0.3);
g6 = new Ground(windowWidth/2+4655,windowHeight/2+180,0.3);

e9 = new Enemy2(windowWidth/2+400,windowHeight/2);
e10 = new Enemy(windowWidth/2+500,windowHeight/2);
e11 = new Enemy2(windowWidth/2+600,windowHeight/2);
e12 = new Enemy(windowWidth/2+700,windowHeight/2);
e13 = new Enemy2(windowWidth/2+800,windowHeight/2);
e14 = new Enemy2(windowWidth/2+1000,windowHeight/2);
e15 = new Enemy2(windowWidth/2+4800,windowHeight/2);
e16 = new Enemy2(windowWidth/2+4600,windowHeight/2);

bird3 = new Bird(windowWidth/2+2700,windowHeight/2-150);
bird4 = new Bird(windowWidth/2+2500,windowHeight/2-150);

//creating simple object

player=createSprite(windowWidth/2-100,windowHeight/2);
player.addAnimation("running",playerImg);
 
health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
health.shapeColor="lawngreen";


rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;

gun=createSprite(windowWidth/2-390,windowHeight/2-150);
gun.addImage(gunImg);
gun.scale=0.2;

shoot=createSprite(windowWidth/2+150,windowHeight/2+120);
shoot.addImage(shootImg);
shoot.scale=0.150;

b3=createSprite(windowWidth/2+200,windowHeight/2-100);
b3.addImage(BeamImg);
b3.scale=0.5;
fgroup.add(b3);


wall5=createSprite(windowWidth/2+1050,windowHeight/2,20,700);
wall5.visible=false;

wall6=createSprite(windowWidth/2+5050,windowHeight/2,20,700);
wall6.visible=false;

food=createSprite(windowWidth/2+500,windowHeight/2-100);
food.addImage(foodImg);
food.scale=0.150;

bullets=40;

}//levelbutton2 over

if (levelbutton3.isHeld){
gameState=level3;

hide.visible=true;

bullets=50;

//js object started

t9 = new Tree(windowWidth/2+200,windowHeight/2-80,2.3);
t10 = new Tree(windowWidth/2+850,windowHeight/2-80,2.3);
t11 = new Tree(windowWidth/2+1800,windowHeight/2-80,2.3);
t12 = new Tree(windowWidth/2+3840,windowHeight/2-80,2.3);
t13 = new Tree(windowWidth/2+4800,windowHeight/2-80,2.3);
t14 = new Tree(windowWidth/2+5500,windowHeight/2-80,2.3);

c3 = new collider(windowWidth/2-470,windowHeight/2,2.0);

ob5 = new Obstacle(windowWidth/2+1150,windowHeight/2,windowWidth/2+1150,windowHeight/2-279);
ob6 = new Obstacle(windowWidth/2+1350,windowHeight/2,windowWidth/2+1350,windowHeight/2-279);

w5 = new Water(windowWidth/2+2810,windowHeight/2+150,1.1);

g7 = new Ground(windowWidth/2+914,windowHeight/2+180,2.0);
g8 = new Ground(windowWidth/2+4707,windowHeight/2+180,2.0);

e17 = new Enemy(windowWidth/2+1600,windowHeight/2);
e18 = new Enemy(windowWidth/2+1800,windowHeight/2);
e19 = new Enemy(windowWidth/2+2100,windowHeight/2);
e20 = new Enemy(windowWidth/2+4600,windowHeight/2);
e21 = new Enemy(windowWidth/2+4800,windowHeight/2);
e22 = new Enemy2(windowWidth/2+5000,windowHeight/2);
e23 = new Enemy2(windowWidth/2+5200,windowHeight/2);
e24 = new Enemy2(windowWidth/2+5400,windowHeight/2);
e25 = new Enemy2(windowWidth/2+5600,windowHeight/2);

bird5 = new Bird(windowWidth/2+3600,windowHeight/2-150);
bird6 = new Bird(windowWidth/2+2800,windowHeight/2-150);
bird7 = new Bird(windowWidth/2+4000,windowHeight/2-150);

//js object over

s1=createSprite(windowWidth/2+100,windowHeight/2-150);
s1.addImage(spikeImg);
s1.scale=0.3;
s1.velocityY=7;
spikegroup.add(s1);

s2=createSprite(windowWidth/2+500,windowHeight/2);
s2.addImage(spikeImg);
s2.scale=0.3;
s2.velocityY=7;
spikegroup.add(s2);

s3=createSprite(windowWidth/2+900,windowHeight/2-150);
s3.addImage(spikeImg);
s3.scale=0.3;
s3.velocityY=7;
spikegroup.add(s3);

//things

player=createSprite(windowWidth/2-100,windowHeight/2);
player.addAnimation("running",playerImg);
 
health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
health.shapeColor="lawngreen";


rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;

gun=createSprite(windowWidth/2-390,windowHeight/2-150);
gun.addImage(gunImg);
gun.scale=0.2;

shoot=createSprite(windowWidth/2+150,windowHeight/2+120);
shoot.addImage(shootImg);
shoot.scale=0.150;

b4=createSprite(windowWidth/2+2600,windowHeight/2);
b4.addImage(BeamImg);
b4.scale=0.5;
b4.velocityX=4;
fgroup.add(b4);

b5=createSprite(windowWidth/2+2600,windowHeight/2);
b5.addImage(BeamImg);
b5.scale=0.5;
b5.velocityX=4;
fgroup.add(b5);

food2=createSprite(windowWidth/2+4000,windowHeight/2);
food2.addImage(foodImg);
food2.scale=0.150;

wall7=createSprite(windowWidth/2+2160,windowHeight/2,20,700);
wall7.visible=false;

wall8=createSprite(windowWidth/2+4300,windowHeight/2,20,700);
wall8.visible=false;

wall9=createSprite(windowWidth/2+5900,windowHeight/2,20,700);
wall9.visible=false;

}//levelbutton3 over

if (levelbutton4.isHeld){
gameState=level4;

bullets=10;

hide.visible=true;

back=createSprite(windowWidth/2,windowHeight/2)
back.addImage(backImg);
back.scale=2.2;

back2=createSprite(windowWidth/2+4800,windowHeight/2)
back2.addImage(backImg);
back2.scale=2.2;

//creating js objects

e26 = new Enemy(windowWidth/2+2700,windowHeight/2);
e27 = new Enemy(windowWidth/2+2900,windowHeight/2);
e28 = new Enemy(windowWidth/2+3100,windowHeight/2);
e29 = new Enemy(windowWidth/2+3300,windowHeight/2);
e30 = new Suneo(windowWidth/2+5700,windowHeight/2)
e31 = new Suneo(windowWidth/2+5900,windowHeight/2)

//creating  grounds


g1=createSprite(windowWidth/2,windowHeight/2+120);
g1.addImage(shortgroundImg);
g1.scale=2.0;
fgroup.add(g1);

g2=createSprite(windowWidth/2+800,windowHeight/2+120);
g2.addImage(shortgroundImg);
g2.scale=2.0;
groundgroup.add(g2);


g3=createSprite(windowWidth/2+1300,windowHeight/2+120);
g3.addImage(shortgroundImg);
g3.scale=2.0;
groundgroup.add(g3);

g4=createSprite(windowWidth/2+2000,windowHeight/2+120);
g4.addImage(shortgroundImg);
g4.scale=2.0;
groundgroup.add(g4);

g5=createSprite(windowWidth/2+2700,windowHeight/2+120);
g5.addImage(shortgroundImg);
g5.scale=2.0;
fgroup.add(g5);

g6=createSprite(windowWidth/2+3000,windowHeight/2+120);
g6.addImage(shortgroundImg);
g6.scale=2.0;
fgroup.add(g6);

g7=createSprite(windowWidth/2+3300,windowHeight/2+120);
g7.addImage(shortgroundImg);
g7.scale=2.0;
fgroup.add(g7);

g8=createSprite(windowWidth/2+4100,windowHeight/2+120);
g8.addImage(shortgroundImg);
g8.scale=2.0;
groundgroup.add(g8);

g9=createSprite(windowWidth/2+4700,windowHeight/2+120);
g9.addImage(shortgroundImg);
g9.scale=2.0;
groundgroup.add(g9);

g10=createSprite(windowWidth/2+5300,windowHeight/2+120);
g10.addImage(shortgroundImg);
g10.scale=2.0;
fgroup.add(g10);

g11=createSprite(windowWidth/2+5600,windowHeight/2+120);
g11.addImage(shortgroundImg);
g11.scale=2.0;
fgroup.add(g11);


g12=createSprite(windowWidth/2+5900,windowHeight/2+120);
g12.addImage(shortgroundImg);
g12.scale=2.0;
fgroup.add(g12);

g13=createSprite(windowWidth/2+6500,windowHeight/2+120);
g13.addImage(shortgroundImg);
g13.scale=2.0;
fgroup.add(g13);


//player objects

  player=createSprite(windowWidth/2-100,windowHeight/2);
  player.addAnimation("running",playerImg);
   
  health=createSprite(windowWidth/2-380,windowHeight/2-250,110,20);
  health.shapeColor="lawngreen";
  
  
  rightbutton=createSprite(windowWidth/2-250,windowHeight/2+160);
  rightbutton.addImage(rightImg);
  rightbutton.scale=0.3;
  
  leftbutton=createSprite(windowWidth/2-350,windowHeight/2+160);
  leftbutton.addImage(leftImg);
  leftbutton.scale=0.3;
  
  punchButton=createSprite(windowWidth/2+350,windowHeight/2+160);
  punchButton.addImage(punchImg);
  punchButton.scale=0.240;
  
  jumpButton=createSprite(windowWidth/2+250,windowHeight/2+160)
  jumpButton.addImage(jumpImg);
  jumpButton.scale=0.3;
  
  gun=createSprite(windowWidth/2-390,windowHeight/2-80);
  gun.addImage(gunImg);
  gun.scale=0.2;
  
  shoot=createSprite(windowWidth/2+150,windowHeight/2+160);
  shoot.addImage(shootImg);
  shoot.scale=0.150;

  wall10=createSprite(windowWidth/2+2550,windowHeight/2,20,700);
  wall10.visible=false;

  wall11=createSprite(windowWidth/2+3500,windowHeight/2,20,700);
  wall11.visible=false;

  wall12=createSprite(windowWidth/2+5100,windowHeight/2,20,700);
 wall12.visible=false;

 wall13=createSprite(windowWidth/2+6100,windowHeight/2,20,700);
 wall13.visible=false;

 wall14=createSprite(windowWidth/2+6600,windowHeight/2,20,700);
 wall14.visible=false;

}//levelbutton4 over
  
}//start end 

   else if(gameState === level1){
   
 // gui start

 r.visible=true;
l.visible=true;
p.visible=true;
j.visible=true;


menu.visible=false;
 
 if (r.isHeld){
  angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
 
    player.x=player.x+15;
    angle=5;
   
  
   }

   if (l.isHeld){
    angle=4;
    if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg2);
   }
 
      player.x=player.x-10;
      angle=4;
   }
 
   

 // gui end 
 
player.velocityY=player.velocityY+2.0;

if(player.x>windowWidth/2-18){
camera.x=player.x;
health.x=player.x-340;
rightbutton.x=player.x-250;
leftbutton.x=player.x-350;
punchButton.x=player.x+350;
jumpButton.x=player.x+250;
}



player.velocityX=0;

if (keyDown(RIGHT_ARROW)) {
  player.x=player.x+15;
  angle=5;
  
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW)) {
 player.x=player.x-10;
 angle=4;
 
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 

  

  

  if(b1.x>windowWidth/2+3700){
    b1.velocityX=-4;
  }

  if(b1.x<windowWidth/2+3400){
    b1.velocityX=4;
  }


  if(b2.x>windowWidth/2+4100){
    b2.velocityX=-4;
  }

  if(b2.x<windowWidth/2+3900){
    b2.velocityX=4;
  }


  
  for(var f = 0; f < fgroup.length; f++){
    if(fgroup.get(f).isTouching(player)){
     player.collide(fgroup);
    if(keyDown(UP_ARROW)){
           player.velocityY=-29;
            }
 if (j.isHeld){
   player.velocityY=-29;
  }
 }
     } 


    


     if(player.isTouching(wall2)){
      wall2.x=windowWidth/2+1649;
    }
    
    if(wall2.x === windowWidth/2+1649){
      e5.display();
      e6.display();
      e7.display();
      e8.display();
    }

    if(player.isTouching(wall4)){
      health.width=5;
    }
    
if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall.destroy();
wall2.destroy();
wall3.destroy();
b1.destroy();
b2.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();

e5.display();
e6.display();
e7.display();
e8.display();

bird1.display(windowWidth/2+4300,windowWidth/2+5000);
bird2.display(windowWidth/2+4300,windowWidth/2+5000);

}

if(player.isTouching(extrawall)){
 extrawall.x= windowWidth/2+4251;
}

if(extrawall.x === windowWidth/2+4251){
  bird1.display(windowWidth/2+4300,windowWidth/2+5000);
  bird2.display(windowWidth/2+4300,windowWidth/2+5000);
}

  //display the object

  t1.display();
  t2.display();
  t3.display();
  t4.display();

 g1.display();
 g2.display();
 g3.display();

 w1.display();
 w2.display();
 
 ob1.display();
 ob2.display();

 c1.display();

 wg1.display();
 wg2.display();

e1.display();
e2.display();
e3.display();
e4.display();



}//level1 end

else if(gameState === level2){
  r.visible=true;
  l.visible=true;
  p.visible=true;
  j.visible=true;
  shootbutton.visible=true;

  menu.visible=false;


  player.velocityY=player.velocityY+2.0;

  if(player.x>windowWidth/2-18){
  camera.x=player.x;
  health.x=player.x-340;
  rightbutton.x=player.x-250;
  leftbutton.x=player.x-350;
  punchButton.x=player.x+350;
  jumpButton.x=player.x+250;
  gun.x=player.x-390;
  shoot.x=player.x+150;
  }
  
  //gui started

  if (r.isHeld){
    angle=5;
    if(frameCount % 16 === 0 && move === 5){
      player.addAnimation("running",playerImg);
     }

     if(frameCount % 16 === 0 && move === 4){
      player.addAnimation("running",playergunImg);
     }
   
      player.x=player.x+15;
      angle=5;
     
    

     }

   
    
  
     if (l.isHeld){
      angle=4;
      if(frameCount % 16 === 0 && move === 5){
      player.addAnimation("running",playerImg2);
     }

     if(frameCount % 16 === 0 && move === 4){
      player.addAnimation("running",playergunImg2);
     }
   
        player.x=player.x-10;
        angle=4;

       
     
 }





 if (shootbutton.isHeld && bullets>0){
   move=4;
if(angle === 5){
  if(frameCount % 5 === 0){
    player.addAnimation("running",playergunImg);

     var bullet = createSprite(player.x+60,player.y+15);
      bullet.addImage(bulletImg2);
      bullet.scale=0.1;
     bullet.velocityX=30;
      bullet.lifetime=30;
      shootSound.play();
      bullets=bullets-1;
      bulletgroup.add(bullet);
      fire = 4;
      }
    }
      if(angle === 4){
         if(frameCount % 5 === 0){
          player.addAnimation("running",playergunImg2);

           var bullet = createSprite(player.x-60,player.y+15);
            bullet.addImage(bulletImg);
            bullet.scale=0.1;
           bullet.velocityX=-30;
            bullet.lifetime=30;
            shootSound.play();
            bullets=bullets-1;
            bulletgroup.add(bullet);
            }
          }
 }

 if(shootbutton.isReleased){
   move=5;
   fire = 5;
   
 }


 
  
  //gui over

  textSize(40);
  fill("white");
text(""+bullets,gun.x-25,windowHeight/2-100)

  player.velocityX=0;
  
  if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+15;
    angle=5;
    
    if(frameCount % 16 === 0 && move === 5){
      player.addAnimation("running",playerImg);
     }

     if(frameCount % 16 === 0 && move === 4){
      player.addAnimation("running",playergunImg);
     }

  }
       
   if (keyDown(LEFT_ARROW)) {
   player.x=player.x-10;
   angle=4;
   
   if(frameCount % 16 === 0 && move === 5){
   player.addAnimation("running",playerImg2);
  }

  if(frameCount % 16 === 0 && move === 4){
    player.addAnimation("running",playergunImg2);
   }

    } 

   
  

    for(var f = 0; f < fgroup.length; f++){
      if(fgroup.get(f).isTouching(player)){
       player.collide(fgroup);
      if(keyDown(UP_ARROW)){
             player.velocityY=-29;
              }
   if (j.isHeld){
     player.velocityY=-29;
    }
   }
       } 


if(player.isTouching(food)){
  health.width=100;
food.destroy();
}

if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall6.destroy();
wall5.destroy();
b3.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();
food.destroy();
shoot.destroy();
gun.destroy();
}

if(player.isTouching(wall6)){
  health.width=9;
}


    //display the object

  t5.display();
  t6.display();
  t7.display();
  t8.display();


  c2.display();

 g4.display();
 g5.display();
 g6.display();

 wg3.display();
 wg4.display();
 wg5.display();
 wg6.display();

 w3.display();
 w4.display();

 e9.display();
e10.display();
 e11.display();
 e12.display();
 e13.display();
 e14.display();
 e15.display();
 e16.display();



 bird3.display(windowWidth/2+2400,windowWidth/2+3000);
 bird4.display(windowWidth/2+2400,windowWidth/2+3000);

}//level2 end

else if(gameState === level3){
  r.visible=true;
  l.visible=true;
  p.visible=true;
  j.visible=true;
  shootbutton.visible=true;

  menu.visible=false;


//gui started

if (r.isHeld){
  angle=5;
  if(frameCount % 16 === 0 && move === 5){
    player.addAnimation("running",playerImg);
   }

   if(frameCount % 16 === 0 && move === 4){
    player.addAnimation("running",playergunImg);
   }
 
    player.x=player.x+15;
    angle=5;
   
  

   }

 
  

   if (l.isHeld){
    angle=4;
    if(frameCount % 16 === 0 && move === 5){
    player.addAnimation("running",playerImg2);
   }

   if(frameCount % 16 === 0 && move === 4){
    player.addAnimation("running",playergunImg2);
   }
 
      player.x=player.x-10;
      angle=4;

     
   
}





if (shootbutton.isHeld && bullets>0){
 move=4;
if(angle === 5){
if(frameCount % 5 === 0){
  player.addAnimation("running",playergunImg);

   var bullet = createSprite(player.x+60,player.y+15);
    bullet.addImage(bulletImg2);
    bullet.scale=0.1;
   bullet.velocityX=30;
    bullet.lifetime=30;
    shootSound.play();
    bullets=bullets-1;
    bulletgroup.add(bullet);
    fire = 4;
    }
  }
    if(angle === 4){
       if(frameCount % 5 === 0){
        player.addAnimation("running",playergunImg2);

         var bullet = createSprite(player.x-60,player.y+15);
          bullet.addImage(bulletImg);
          bullet.scale=0.1;
         bullet.velocityX=-30;
          bullet.lifetime=30;
          shootSound.play();
          bullets=bullets-1;
          bulletgroup.add(bullet);
          }
        }
}

if(shootbutton.isReleased){
 move=5;
 fire = 5;
 
}




//gui over


  player.velocityY=player.velocityY+2.0;

  if(player.x>windowWidth/2-18){
  camera.x=player.x;
  health.x=player.x-340;
  rightbutton.x=player.x-250;
  leftbutton.x=player.x-350;
  punchButton.x=player.x+350;
  jumpButton.x=player.x+250;
  gun.x=player.x-390;
  shoot.x=player.x+150;
  }

  player.velocityX=0;
  
  if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+15;
    angle=5;
    
    if(frameCount % 16 === 0 && move === 5){
      player.addAnimation("running",playerImg);
     }

     if(frameCount % 16 === 0 && move === 4){
      player.addAnimation("running",playergunImg);
     }

  }
       
   if (keyDown(LEFT_ARROW)) {
   player.x=player.x-10;
   angle=4;
   
   if(frameCount % 16 === 0 && move === 5){
   player.addAnimation("running",playerImg2);
  }

  if(frameCount % 16 === 0 && move === 4){
    player.addAnimation("running",playergunImg2);
   }

    } 

    

    for(var a = 0; a < spikegroup.length; a++){
      if(spikegroup.get(a).y>windowHeight/2+50){
     spikegroup.get(a).velocityY=-10;
   }

   if(spikegroup.get(a).y<windowHeight/2-230){
    spikegroup.get(a).velocityY=10;
  }

if(spikegroup.get(a).isTouching(player)){
  player.visible=Math.round(random(false,true));
health.width=health.width-5;
}

       } 

       if(frameCount % 10 === 0 && health.width>10){
         player.visible=true;
       }

       textSize(40);
       fill("white");
     text(""+bullets,gun.x-25,windowHeight/2-100)


     for(var f = 0; f < fgroup.length; f++){
      if(fgroup.get(f).isTouching(player)){
       player.collide(fgroup);
      if(keyDown(UP_ARROW)){
             player.velocityY=-29;
              }
   if (j.isHeld){
     player.velocityY=-29;
    }
   }
       } 


       if(b4.x>windowWidth/2+2700){
        b4.velocityX=-4;
      }
    
      if(b4.x<windowWidth/2+2300){
        b4.velocityX=4;
      }

      if(b5.x>windowWidth/2+3200){
        b5.velocityX=-4;
      }
    
      if(b5.x<windowWidth/2+2900){
        b5.velocityX=4;
      }

      if(player.isTouching(food2)){
        health.width=100;
      food2.destroy();
      }


   
if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall7.destroy();
wall8.destroy();
wall9.destroy();
b4.destroy();
b5.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();
food2.destroy();
shoot.destroy();
gun.destroy();
s1.destroy();
s2.destroy();
s3.destroy();
}
   
if(player.isTouching(wall9)){
  health.width=9;
}

//display objects of js

t9.display();
t10.display();
t11.display();
t12.display();
t13.display();
t14.display();

c3.display();

w5.display();

ob5.display();
ob6.display();

g7.display();
g8.display();

e17.display();
e18.display();
e19.display();
e20.display();
e21.display();
e22.display();
e23.display();
e24.display();
e25.display();

bird5.display(windowWidth/2+3500,windowWidth/2+4100);
bird6.display(windowWidth/2+3500,windowWidth/2+4100);
bird7.display(windowWidth/2+3500,windowWidth/2+4100);

}//level3 end

else if(gameState === level4){
   
  // gui start

  r.visible=true;
 l.visible=true;
 p.visible=true;
 j.visible=true;
 shootbutton.visible=true;
 
 menu.visible=false;

 
if (shootbutton.isHeld && bullets>0){
  move=4;
 if(angle === 5){
 if(frameCount % 5 === 0){
   player.addAnimation("running",playergunImg);
 
    var bullet = createSprite(player.x+60,player.y+15);
     bullet.addImage(bulletImg2);
     bullet.scale=0.1;
    bullet.velocityX=30;
     bullet.lifetime=30;
     shootSound.play();
     bullets=bullets-1;
     bulletgroup.add(bullet);
     fire = 4;
     }
   }
     if(angle === 4){
        if(frameCount % 5 === 0){
         player.addAnimation("running",playergunImg2);
 
          var bullet = createSprite(player.x-60,player.y+15);
           bullet.addImage(bulletImg);
           bullet.scale=0.1;
          bullet.velocityX=-30;
           bullet.lifetime=30;
           shootSound.play();
           bullets=bullets-1;
           bulletgroup.add(bullet);
           }
         }
 }
 
 if(shootbutton.isReleased){
  move=5;
  fire = 5;
  
 }
  
  if (r.isHeld){
   angle=5;
   if(frameCount % 16 === 0){
     player.addAnimation("running",playerImg);
    }
  
     player.x=player.x+15;
     angle=5;
    
   
    }
 
    if (l.isHeld){
     angle=4;
     if(frameCount % 16 === 0){
     player.addAnimation("running",playerImg2);
    }
  
       player.x=player.x-10;
       angle=4;
    }
  
    
 
  // gui end 
  
 player.velocityY=player.velocityY+2.0;
 
 if(player.x>windowWidth/2-18){
  camera.x=player.x;
  health.x=player.x-340;
  rightbutton.x=player.x-250;
  leftbutton.x=player.x-350;
  punchButton.x=player.x+350;
  jumpButton.x=player.x+250;
  gun.x=player.x-390;
  shoot.x=player.x+150;
  }
 
 
 
 player.velocityX=0;
 
 if (keyDown(RIGHT_ARROW)) {
   player.x=player.x+15;
   angle=5;
   
   if(frameCount % 16 === 0){
     player.addAnimation("running",playerImg);
    }
 }
      
  if (keyDown(LEFT_ARROW)) {
  player.x=player.x-10;
  angle=4;
  
  if(frameCount % 16 === 0){
  player.addAnimation("running",playerImg2);
 }
   } 


  
    if(fgroup.isTouching(player)){
     player.collide(fgroup);
    if(keyDown(UP_ARROW)){
           player.velocityY=-29;
           jumpSound.play();
            }
 if (j.isHeld){
   player.velocityY=-29;
   jumpSound.play();
  }
 }
    


  for(var x = 0; x < groundgroup.length; x++){
      if(groundgroup.get(x).isTouching(player) && player.y<groundgroup.get(x).y-60){
       player.collide(groundgroup);
      if(keyDown(UP_ARROW)){
             player.velocityY=-29;
             jumpSound.play();
              }
   if (j.isHeld){
     player.velocityY=-29;
     jumpSound.play();
    }

groundgroup.get(x).velocityY=groundgroup.get(x).velocityY+7.0

if(groundgroup.get(x).y > windowHeight/2+300){
 groundgroup.get(x).destroy();
}

   }
       } 

       textSize(40);
       fill("white");
     text(""+bullets,gun.x-25,windowHeight/2-20)

     textSize(70);
     fill("yellow");
   text("Level completed",wall14.x-150,windowHeight/2-20)

  

     if(health.width<10){
      gameState="start";
    
    player.destroy();
    health.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    rightbutton.destroy();
    leftbutton.destroy();
    punchButton.destroy();
    jumpButton.destroy();
     shoot.destroy();
    gun.destroy();

    back.destroy();
    back2.destroy();

    fgroup.destroyEach();
     groundgroup.destroyEach();

     e26.display();
     e27.display();
     e28.display();
     e29.display();
     e30.display();
     e31.display();

    }

    if(player.y > windowHeight/2+300){
      health.width=9;
    }

    if(player.isTouching(wall14)){
      health.width=9;
    }

  if(player.isTouching(wall10)){
    wall10.x=windowWidth/2+2551;
  }

if(wall10.x === windowWidth/2+2551){
  e26.display();
  e27.display();
  e28.display();
  e29.display();
}

if(player.isTouching(wall12)){
  wall12.x=windowWidth/2+5101;
}

if(wall12.x === windowWidth/2+5101){
  e30.display();
  e31.display();
}

      //display object
  
 
   
  }//level4 end
  

}



function punch(){

  once=4;
  once2=4;

  
    if(angle === 5){
  
  
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg);
              break;
      case 2:  player.addAnimation("running",beatImg3);
              break;
      default: break;
    }
   }
  
   if(angle === 4){
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg2);
              break;
      case 2:  player.addAnimation("running",beatImg4);
              break;
      default: break;
    }
   }

  
  
  }


 
  

function touchMoved() {
  // do some stuff
  return false;
}










