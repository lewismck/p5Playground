class Circle{

  constructor(x,y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.growing = true;
    this.colour = color(floor(random(255)),floor(random(255)),floor(random(255)));
  }

  show(){
    stroke(255);
    //noFill();
    strokeWeight(2);
    fill(this.colour);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  grow(){
    if(this.growing){
      this.r = this.r+1;
    }
  }

  edges(){
    return (this.x + this.r > width) || (this.x - this.r < 0)
    || (this.y + this.r > height) || this.y + this.r < 0;
  }

}
