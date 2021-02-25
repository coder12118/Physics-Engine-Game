class Panda{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8, 
            friction: 0.1,
            density: 0.5
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.image = loadImage('panda.png');
          this.width = width;
          this.height = height;
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
            push();
        angleMode(RADIANS); //radians (PI is 180 degrees) is used in Matter.js, degrees is used in p5.play
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //strokeWeight(4);
        //stroke("green");
        //fill(255);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        pop();
      }
    }
}