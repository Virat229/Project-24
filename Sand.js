class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,7, options);
      this.radius = 7;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      ellipse(0, 0, this.radius*2, this.radius*2);
      pop();
    }
  };