class Iron{
    constructor(x,y){
        var opt5 = {
            isStatic : false,
            restitution:0.2,
            density : 2.5,
            friction : 3
        }
        this.body = Bodies.rectangle(x,y,100,100,opt5);
        //134,52,80
        this.width = 100;
        this.height = 100;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rect(0,0,this.width,this.height);
    }
}