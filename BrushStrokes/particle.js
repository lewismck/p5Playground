function Particle(x, y, col) {
  this.x = x;
  this.y = y;
  this.r = random(1, 16);
  let r = floor(random(255));
  let g = floor(random(255));
  let b = floor(random(255));
  let colModifier = random(-100,100)
  this.colA = col;//color(r,g,b);
  this.colB = color(
    this.colA.levels[0]+colModifier, 
    this.colA.levels[1]+colModifier, 
    this.colA.levels[2]+colModifier
  ); 
  // color(r+colModifier, g+colModifier, b+colModifier);
  
  
  this.update = function() {
    this.x += random(-5, 5);
    this.y += random(-1, 1);

    this.x = constrain(this.x, 0, width+this.r);    
    this.y = constrain(this.y, 0, height+this.r);    
  }

  this.update = function(increment){
    this.x += random(-increment, increment);
    this.y += random(-increment, increment);

    this.x = constrain(this.x, 0, width+this.r);    
    this.y = constrain(this.y, 0, height+this.r); 
  }
  

  //TODO 
  //Use line not elipse - see particle in perlin noise stuff? 
  //Average colour as it moves e.g. small adjustment each update/show
  //How should the particles move?
    //Flocking system
    //Left right? Up Down
    //perlin noise?
    //Move/spawn based on data from an external source?
  this.show = function() {
    noStroke();
    var rmod = random(this.r-6, this.r+6);
    //interpolate a colour between the two selected
    var lerpedCol = lerpColor(this.colA, this.colB, random(0,1))
    fill(
      // this.colA.levels[0], 
      // this.colA.levels[1], 
      // this.colA.levels[2],
      lerpedCol.levels[0], 
      lerpedCol.levels[1], 
      lerpedCol.levels[2],
      random(0,255)
      );
    ellipse(this.x, this.y, rmod, rmod+random(1,this.r));    
  }
  
}