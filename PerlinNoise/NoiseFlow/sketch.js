/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
 var inc = 0.1;
 var scl = 10;
 var cols, rows;
 var fr;

 var zoff = 0;

 var particles = [];

 function setup(){
  createCanvas(800, 800);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowField = new Array(cols * rows);

  //Create an array of particles to be move based on the flowField
  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(255);
}


 function draw(){
   var yoff = 0;

   //Similar to 2D example of drawing in a grid but with vectors not pixels
   for (var x = 0; x < cols; x++){
     var xoff = 0;
     for (var y = 0; y < rows; y++){
       var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      stroke(0, 50);
       //Don't draw the vectors!
       // stroke(0, 50);
       // strokeWeight(1);
       // push();
       // translate(x*scl, y*scl);
       // rotate(v.heading());
       // line(0,0,scl,0);
       // pop();
     }
     yoff += inc;

     zoff += 0.0003;
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
