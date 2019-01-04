/**
 * Penrose Tiles based off of: https://p5js.org/examples/simulate-penrose-tiles.html
 * https://en.wikipedia.org/wiki/Penrose_tiling
 **/
class PenroseLSystem{
  constructor(startLength, theta, lineColour){
    this.steps = 0;
    this.lineColour = lineColour;

    //these are axiom and rules for the penrose rhombus l-system
    //https://en.wikipedia.org/wiki/Penrose_tiling#Rhombus_tiling_(P3)
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    //please play around with the following two lines
    this.startLength = startLength;
    this.theta = theta; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
  }

  updateSliders(theta, lineColour){
    this.theta = theta;
    this.lineColour = lineColour;
  }

  simulate(gen) {
    while (this.getAge() < gen) {
      this.iterate(this.production);
    }
  }

  reset() {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

  getAge() {
    return this.generations;
  }

  //apply substitution rules to create new iteration of production string
  iterate() {
    var newProduction = "";

    for(var i=0; i<this.production.length; ++i) {
      var step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      }
      else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      }
      else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      }
      else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      }
      else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }
    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
  }

  //convert production string to a turtle graphic
  render() {

    translate(width/2, height/2);

    this.steps += 20;
    if(this.steps > this.production.length) {
      this.steps = this.production.length;
    }

    for(var i=0; i<this.steps; ++i) {
      var step = this.production.charAt(i);
      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if( step == 'F') {
        //stroke(255, 60);
        stroke(this.lineColour);
        for(var j=0; j < this.repeats; j++) {
          line(0, 0, 0, -this.drawLength);
          noFill();
          translate(0, -this.drawLength);
        }
        this.repeats = 1;
      }
      else if (step == '+') {
        rotate(this.theta);
      }
      else if (step == '-') {
        rotate(-this.theta);
      }
      else if (step == '[') {
        push();
      }
      else if (step == ']') {
        pop();
      }
    }
  }
}
