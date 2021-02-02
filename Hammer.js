class Hammer{
    constructor(x,y){
        var options = {
            restitution : 0.5,
            friction : 1,
            density : 2,
        }
        this.body = Bodies.rectangle(x,y,150,50,options);
        World.add(world,this.body);
        this.width = 150;
        this.height = 50;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight (4);
        fill ("yellow");

        rect(0,0,this.width,this.height);
        pop ();
 }

}