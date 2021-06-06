class Tree {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
      
        this.collider.scale=scale;
      
       

    }

display(){
   
    if(health.width<10){
    
        this.collider.destroy();
    } 

   
     
    if(gameState === level1 || gameState === level2){
        this.collider.addImage(treeImg)
    }
    
    
    
    if(gameState === level3 || gameState === level4){
        this.collider.addImage(drytreeImg)
    }
  

}
}


