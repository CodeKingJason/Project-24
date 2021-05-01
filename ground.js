class Ground{
    constructor(x,y,w,h){
        var options = {
         isStatic: true
        }

            this.body = Bodies.rectangle (x,y,w,h, options);
            World.add(world,this.body);
            this.width = w;
            this.height = h;
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
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