class Bob{
    constructor(x,y){
        var options={
            restitution: 1,
            density:0.8
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        // console.log(this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        fill("pink")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,50,50);
        pop();
    }


}