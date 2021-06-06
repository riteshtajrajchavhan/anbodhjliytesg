class Ground {
    constructor(x,y,scale){
        this.ground=createSprite(x,y);
       this.ground.scale=scale;

        this.collider=createSprite(x);
        this.collider.y=this.ground.y+2;
       
        this.collider.scale=scale;
        this.collider.visible=false;
       

    }

display(){

    if(health.width<10){
    this.ground.destroy();
    this.collider.destroy();
    }

    cgroup.add(this.collider)

    player.collide(this.collider);


   if (keyDown(UP_ARROW) && player.isTouching(this.ground)) {
        player.velocityY=player.velocityY-28;
        jumpSound.play();
     }  

     if (j.isHeld){
        if (player.isTouching(this.ground)) {
            player.velocityY=player.velocityY-28;
            jumpSound.play();
         }   
     }



    
       
     
if(gameState === level1 || gameState === level2){
    this.ground.addImage(groundImg);
    this.collider.addImage(groundImg)
}



if(gameState === level3 || gameState === level4){
    this.ground.addImage(drygroundImg);
    this.collider.addImage(drygroundImg)
}
      


if(player.isTouching(this.ground)){
    camera.y=this.ground.y-220;
    health.y=this.ground.y-470;
}


}
}



