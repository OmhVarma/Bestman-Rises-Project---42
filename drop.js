class Drop{
    constructor(x,y){

    var options = {
        friction: 0.1,
        isStatic: false,
        restitution: 0.3
    }

    this.body = Bodies.circle(x,y,2.5,options);
    this.x = x;
    this.y = y;
    this.r = 5;     
    World.add(world,this.body);
    }
 
    display(){

    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r,this.r);

    if(frameCount % 5 === 0){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x: random(0,550), y: random(-10,700)});
     }
    }
    }
}