/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
var inc = 0.01
var start = 0;

 function setup(){
   createCanvas(800,800);
   slider = createSlider(0.01, 0.4, 0.01, 0.01);
 }


 function draw(){
   background(51);

   // Connect the dots
   stroke(255);
   noFill();

   //Start drawing in a graph style (still using 1 dimension of perlin noise)
   beginShape();
   var xoff = start;
   for (var x = 0; x < width; x++){
     stroke(255);
     var y = noise(xoff)*height; //Change noise to sin for more fun ((height/2) + (sin(xoff)*heigh/2)
     vertex(x, y);

     xoff += slider.value();
   }
   endShape();

   //Continue to increment the start point
   start += inc;
 }

 function movingCircle(){
   var xoff1 = 0;
   var xoff2 = 10000;

   var x = map(noise(xoff1), 0, 1, 0, width);
   var y = map(noise(xoff2), 0, 1, 0, width);

   xoff1 += 0.01; //How quickly/far ahead do you move through the perlin noise graph
   xoff2 += 0.03; //Move along the y axis more randomly by looking farther ahead

   ellipse(x, y, 24, 24);
 }
