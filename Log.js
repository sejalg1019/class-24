class Log{ //creating the class
    constructor(x,y,height,angle){ //creating the constructor and arguments
        var options = { //properties
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20; //fixing the width
        this.height = height;
        Matter.Body.setAngle(this.body,angle); //adding the angle
        World.add(world1,this.body); //adding into world1
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; //storing the angle
        push(); //set
        translate(pos.x, pos.y); //shifting the box by pos.x, pos.y
        rotate(angle); //rotating the box 
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height); //drawing the rectangle
        pop(); //reset
    }
}