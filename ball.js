class Ball {
constructor(){
    var options={
        restitution:1,
        isStatic:false,
        friction:0.5,
        density:1.4
      }
      this.body=Bodies.circle(180,200,20,options);
      World.add(world,this.body);

}
display(){
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,20,20);

}


}