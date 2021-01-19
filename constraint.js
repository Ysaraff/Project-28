class Constraints{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length: 10,
        }
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
            }
    }
    fly(){
        this.constraint.bodyA = null;
    }
}