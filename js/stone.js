class Stone{
    constructor(x,y,radius){
      var options = {
        isStatic: false,
        restitution: 0,
        friction: 1,
        denity: 1.2
      } 
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.image = loadImage("images/stone.png");
      this.body = Bodies.circle(x, y, this.radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
    
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,0,0,this.radius*2,this.radius*2);
      
      pop();
    }
  }