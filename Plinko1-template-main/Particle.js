class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4,
        }
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        this.color(random(0,255),(0,255),(0,255))
        World.add(this.body,world)
    }
    display() {
        var pos = this.body.postion
        var angle = this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()


        
    }
}
