class Bird{ //creating the class
    constructor(x,y){ //creating the constructor and arguments
        var options = { //properties
            density: 1.5,
            friction: 1,
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50; //fixing the width
        this.height = 50; //fixing the height
        World.add(world1,this.body); //adding into world1
    }
    display(){
        var pos = this.body.position;
        //moving the bird with the mouse
        pos.x = mouseX; 
        pos.y = mouseY;
        
        var angle = this.body.angle; //storing the angle
        push(); //set
        translate(pos.x, pos.y); //shifting the box by pos.x, pos.y
        rotate(angle); //rotating the box 
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height); //drawing the rectangle
        pop(); //reset
    }
}