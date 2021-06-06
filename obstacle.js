class Obstacle{
    constructor(x,y,x2,y2){
        this.body=createSprite(x,y);
        this.body.addImage(obstacleImg);
        this.body.scale=0.3;

        this.body2=createSprite(x2,y2);
        this.body2.addImage(obstacleImg);
        this.body2.scale=0.3;

    }

display(){

player.collide(this.body);
player.collide(this.body2)

cgroup.add(this.body);
cgroup.add(this.body2)

if(health.width<10){
    this.body.destroy();
    this.body2.destroy();
}

for(var i = 0; i < bgroup.length; i++){
    if(bgroup.get(i).isTouching(cgroup)){
      bgroup.get(i).destroy();
        }
  }

  for(var i = 0; i < bulletgroup.length; i++){
    if(bulletgroup.get(i).isTouching(cgroup)){
      bulletgroup.get(i).destroy();
        }
  }


}
  
}