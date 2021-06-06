class Enemy2{
    constructor(x,y){
      this.body=createSprite(x,y)
      this.body.addAnimation("running",gunenmeyImg);
      this.body.scale=0.4;

this.w=createSprite(x,y,30,100);
this.w.visible=false;

this.w2=createSprite(x,y,30,100);
this.w2.visible=false;

this.life =createSprite(-300,y,60,1);

this.angle=createSprite(-300,y,5,1)
 
    }



    
display(){

  if(health.width<10){
    this.body.destroy();
    this.w.destroy();
     this.w2.destroy();
     this.life.destroy();
  this.angle.destroy();
    }

  
    if(gameState === level2){
      this.body.collide(wall5);
    }
 

  
    if(player.x<this.body.x-40 && player.x>this.body.x-500 && this.life.width>10 && beat === 5 && health.width>9){
      this.angle.width=4;
      if(frameCount % 30 === 0 && fire === 5){
        this.body.addAnimation("running",gunenmeyImg);

          var bullet = createSprite(this.body.x-60,this.body.y+15);
          bullet.addImage(bulletImg);
          bullet.scale=0.1;
         bullet.velocityX=-20;
          bullet.lifetime=30;
          pistolSound.play();
          bgroup.add(bullet);
          }
  }

  if(player.x>this.body.x+40 && player.x<this.body.x+500 && this.life.width>10 && beat === 5 && health.width>9){
     this.angle.width=5;
      if(frameCount % 20 === 0 && fire === 5){
        this.body.addAnimation("running",gunenmeyImg2);

        var bullet = createSprite(this.body.x+60,this.body.y+15);
        bullet.addImage(bulletImg2);
        bullet.scale=0.1;
        bullet.velocityX=20;
        bullet.lifetime=30;
        pistolSound.play();
        bgroup.add(bullet);
      }
  }

  for(var i = 0; i < bgroup.length; i++){
    if(bgroup.get(i).isTouching(player)){
     player.bounceOff(bgroup);
      bgroup.get(i).destroy();
      health.width=health.width-10;
        }
  }

  for(var i = 0; i < bulletgroup.length; i++){
    if(bulletgroup.get(i).isTouching(this.body)){
      this.body.bounceOff(bulletgroup);
      bulletgroup.get(i).destroy();
      this.life.width=this.life.width-10;
        }
  }


   this.w.x=this.body.x-15;
   this.w.y=this.body.y;

   this.w2.x=this.body.x+15;
   this.w2.y=this.body.y;


   
 

if(this.life.width === 10){
    this.body.destroy();
   this.w.destroy();
    this.w2.destroy();
    this.life.destroy();
   }


 



// key down space 
  
if(keyDown("space") && once === 5  && player.isTouching(this.body)){
    punch();
    occur=1;
    beat=4;
   if(player.isTouching(this.body)){
        this.life.width=this.life.width-10;
        punchSound.play();
       }

              
if(this.angle.width === 5){
  this.body.velocityX=-100;
 }

      
if(this.angle.width === 4){
  this.body.velocityX=100;
  }

 
  }// key down space over


  if (p.isPressed){
    if(once === 5  && player.isTouching(this.body)){
      punch();
      occur=1;
      beat=4;
     if(player.isTouching(this.body)){
          this.life.width=this.life.width-10;
          punchSound.play();
         
}
   
       
if(this.angle.width === 5){
  this.body.velocityX=-100;
}

      
if(this.angle.width === 4){
  this.body.velocityX=100;
}



    }
  }
  

 

 if(this.body.isTouching(cgroup)){
  this.body.collide(cgroup)
  if(player.y + 20<this.body.y){
    this.body.velocityY=-28;
  }
 }

 this.body.velocityY=this.body.velocityY+2;

 Time2();
  
 if(gameState === level3){
  this.body.collide(wall7);
  this.body.collide(wall8);
}

  this.body.velocityX=Math.round(random(10,-10))

  if(this.body.y>windowHeight/2+500){
    this.life=9;
  }


}
}

 
function Time2(){
  if(occur === 1){
    time=time+1;
    if(time === 10){
  
      if(angle === 5){
        player.addAnimation("running",playerImg);
        }
  
      if(angle === 4){
      player.addAnimation("running",playerImg2);
      }
  
      time=1;
      occur=2;
      once=5;
      beat=5;
    }
  }
}

