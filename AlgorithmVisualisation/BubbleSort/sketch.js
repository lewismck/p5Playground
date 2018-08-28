/**
 * ugly, ugly code to visualise a bubble sort, based off of the lovely coding train challenges:
 * https://github.com/CodingTrain/website/tree/master/CodingChallenges
 **/
 var values = [];
 var i = 0;
 var j = 0;

 function setup(){
   createCanvas(800,600);

   for(var i =0; i < width; i++){
     values[i] = random(height);//Why not change the line generation? //noise(i/100*height);
   }
 }


 function draw(){
   background(51);
   stroke(0);

   drawLines();
   a = values[j];
   b = values[j+1];
   if(a > b){
     swapValues(values, j, j+1);
   }

   //Sort 100 times per frame
   // for(var n = 0; n < 100; n++){
     if(i < values.length){
       j++;
       if(j >= values.length-i-1){
         j = 0;
         i = i+1;
       }
     } else{
       console.log("finished");
       noLoop();
     }
   // }
 }

 function swapValues(values, a, b){
   values[a] = b;
   values[b] = a;
 }

 function drawLines(){
   for(var i = 0; i < values.length; i++){
     line(i, height, i, height-values[i]);
   }
 }
