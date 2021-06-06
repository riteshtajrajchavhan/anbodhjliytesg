class Wood {
    constructor(x,y,scale){
        this.ground=createSprite(x,y);
        this.ground.addImage(woodImg);
        this.ground.scale=scale;

        this.collider=createSprite(x);
        this.collider.y=this.ground.y+2;
        this.collider.addImage(woodImg)
        this.collider.scale=scale;
        this.collider.visible=false;
       

    }

display(){

  
if(health.width<10){
    this.ground.destroy();
    this.collider.destroy();
}
   
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

     
    

     


}
}