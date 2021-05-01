class Hammer{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0        
        }

            this.body = Bodies.rectangle (x,y,100,100, options);
            World.add(world,this.body);
            this.width = 100;
            this.height = 100;
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke ("brown");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}