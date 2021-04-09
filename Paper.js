class Paper{
    constructor(x,y,w,h){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
            this.x=x;
            this.y=y;
            this.w=w;
            this.h=h;
            this.image = loadImage("paper.png");
            this.body=Bodies.rectangle(x, y, w, h , options);
            World.add(world, this.body);
    }

    display()
	{
			var paperPos=this.body.position;
            translate(paperPos.x, paperPos.y);	
			push();
			rectMode(CENTER)
			//strokeWeight(4);
            imageMode(CENTER);
            image(this.image,0,10,this.w-5, this.h);
			//rect(0,0,this.w, this.h);
			pop()
			
	}
}
