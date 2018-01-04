/**
 * It's a bobbing fish hook of course...
 **/
 var speed = 0.04;
 var phase = 0;
 var x = 400;

 function setup(){
   createCanvas(800,800);

   //Set some colour variables
   noStroke();
   colourA = color(253, 174, 120); //253, 174, 120
   colourB = color(226, 129, 161);
}


 function draw(){
   background(60, 130, 240); //4, 58, 74
   drawHookAndLine();

   //Write function to procedurally generate some elements like bubbles or seaweed...
 }

 function drawHookAndLine(){

   //Motion
   phase = frameCount * speed; //frameCount is number of passed frames
   var y = height/2 + sin(phase) * 50;

   //Draw the hook
   fill('darkGrey');
   rect(x-5, y+10, 13, 30);
   fill('#ccc');
   arc(x-4, y+40, 26, 30, TWO_PI, PI);
   //Draw line
   fill('black');
   rect(x-1, y-height/1.6, 2, height/1.6);

   //Set an interpolation colour to phase between colourA and colourB
   fill(lerpColor(colourA, colourB, sin(phase)*2));
   //Draw the bob
   ellipse(x, y, 43, 43);
 }
