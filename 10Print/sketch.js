/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/

let x = 0;
let y = 0;



 function setup(){
   createCanvas(800,800);
   background(0);
   spaceSlide = createSlider(1, 100, 20, 1);
   probabilitySlide = createSlider(0, 1, 0.5, 0.1);
 }


 function draw(){
   stroke(255);
   let spacing = spaceSlide.value();
   if(random(1) < probabilitySlide.value()){
     line(x, y, x + spacing,y + spacing);
   }
   else{
     line(x,y + spacing,x + spacing, y);
   }

   x = x + spacing;
  if (x > width){
    x = 0;
    y = y + spacing;
  }
 }
