/**
 * ugly, ugly code to visualise a bubble sort, based off of the lovely coding train challenges:
 * https://github.com/CodingTrain/website/tree/master/CodingChallenges
 **/
 var values = [];
 var i = 0;
 var j = 0;
 var lineType = 'line';

 function setup(){
   createCanvas(800,600);
   //Create an array of semi random values
   for(var i =0; i < width; i++){
     values[i] = random(height);//Why not change the line generation? //noise(i/100*height);
   }

   button = createButton('Switch');
   button.mousePressed(switchLineType);
 }


 function draw(){
   background(51);
   stroke(0);

   //Which line to draw?
   if(lineType == 'line'){
     drawLines();
   }else{
    drawBezierCurves();
   }

   a = values[j];
   b = values[j+1];
   if(a > b){
     swapValues(values, j, j+1);
   }

   //For the draw loop only increment if the array is not exhausted
   if (i < values.length){
      j++;
      if(j >= values.length-i-1){
        j = 0;
        i = i+1;
      }
   } else {
      console.log("finished");
      noLoop();
   }

 }

 function switchLineType(){
   // console.log(lineType);
   if(lineType == 'line'){
     lineType = 'bezier';
   } else {
     lineType = 'line';
   }
 }

 function swapValues(values, a, b){
   values[a] = b;
   values[b] = a;
 }

 function drawBezierCurves(){
   for(var i = 0; i < values.length; i++){
      bezier(i, height, i*0.1, i, i, height-values[i], i*0.1, i);
     // bezier(i, height, i*0.2, noise(i/100*height), i, height-values[i], noise(i/100*height), i);
   }
 }

 function drawLines(){
   for(var i = 0; i < values.length; i++){
     line(i, height, i, height-values[i]);
   }
 }
