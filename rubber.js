class Rubber{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':5,
            'density':1        
        }

            this.body = Bodies.circle(x,y,20, options);
            World.add(world,this.body);
            this.r = 20;
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke ("red");
        fill("orange");
        ellipse(0,0, this.r, this.r);
        pop();
    }
}