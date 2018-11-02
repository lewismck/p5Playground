/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
 var inc = 0.15;
 var scl = 50;
 var cols, rows;
 var Y_AXIS = 1;
 var X_AXIS = 2;
 var c1;
 var angles;
 var multiply;
 var angleChoice;

 var zoff = 0;

 var particles = [];

 function setup(){
  createCanvas(800, 800);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  c1 = color(random(255),random(255),random(255));
  multiply = Math.floor(random(10))%2==0;
  angleChoice = random(10);
  flowField = new Array(cols * rows);

  //Create an array of particles to be move based on the flowField
  for (var i = 0; i < random(500); i++) {
    particles[i] = new Particle(random(width), random(height), random(3.5));
  }
  //Set background gradient between a random colour and white with a randomly chosen X or Y axis
  setGradient(0, 0, width, height, c1, color(255,255,255), Math.floor(random(10))%2==0 ? X_AXIS : Y_AXIS);
}


 function draw(){
   drawEverything(multiply, angleChoice);
 }


 function drawEverything(multiply, angleChoice){
   colorMode(HSB, 100);
   var yoff = 0;
   //Similar to 2D example of drawing in a grid but with vectors not pixels
   for (var x = 0; x < cols; x++){
     var xoff = 0;
     for (var y = 0; y < rows; y++){
      var index = x + y * cols;
      //alter angle
      var angle = generateAngle(xoff, yoff, zoff, multiply, angleChoice);
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      stroke(0, 50);
     }

     yoff += inc;

     zoff += random(0.001);//0.0003;
   }

   //Make the particles follow the generated perlin vectors
   for(var i = 0; i < particles.length; i++){
     particles[i].follow(flowField);
     particles[i].update();
     particles[i].edges();
     particles[i].show();
   }

   fr.html(floor(frameRate()));
 }

/*
 * Pick a random angle to return to generate the vectors from
 */
function generateAngle(x, y, z, multiply, m){
  return multiply ? noise(x, y, z) * TWO_PI * m : noise(x, y, z);
}

 /*
  *Curtesy of: https://p5js.org/examples/color-linear-gradient.html
  */
function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }

  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
