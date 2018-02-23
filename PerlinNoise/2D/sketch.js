/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/

 function setup(){
   createCanvas(800,800);
   pixelDensity(1);
   slider = createSlider(0.01, 0.4, 0.01, 0.01);
 }


 function draw(){
   var yoff = 0;

   loadPixels();

   for (var x = 0; x < width; x++){
     var xoff = 0;
     for (var y = 0; y < height; y++){
       var index = (x + y * width) * 4;
       var r = noise(xoff, yoff)*255;
       //Still not sure I understand pixels
       pixels[index+0] = r;
       pixels[index+1] = r;
       pixels[index+2] = r;
       pixels[index+3] = 255;

       xoff += slider.value();
     }
     yoff += slider.value();
   }

   updatePixels();
 }
