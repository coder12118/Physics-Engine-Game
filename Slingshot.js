class Slingshot{
    constructor(body1, point2){
        var options = { //JSON, key: value
            bodyA: body1,
            pointB: point2,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = point2;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot)
    }

    attach(body){
        this.slingshot.bodyA = body;
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}