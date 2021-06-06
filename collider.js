class collider {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
      
        this.collider.scale=scale;
      
       

    }

display(){
   
    player.collide(this.collider);

    if(health.width<10){
        this.collider.destroy();
    }


    cgroup.add(this.collider);


    if(gameState === level1 || gameState === level2){
        this.collider.addImage(colliderImg)
    }
    
    
    
    if(gameState === level3 || gameState === level4){
        this.collider.addImage(drycolliderImg);
    }

}
}