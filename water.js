class Water {
    constructor(x,y,scale){
        this.water=createSprite(x,y);
        this.water.addImage(waterImg);
        this.water.scale=scale;
       
        this.collider=createSprite(x,y);
        this.collider.y=this.water.y+130;
        this.collider.addImage(waterImg);
        this.collider.scale=scale;
        this.collider.visible=false;
        
       
      
    }

display(){
   
    if(health.width<10){
        this.water.destroy();
        this.collider.destroy();
         }

if(player.isTouching(this.collider)){
    health.width=5;
}

}
}