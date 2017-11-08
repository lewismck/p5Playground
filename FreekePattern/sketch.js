/**
 * https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
 **/
 var maxCircleSize = 10;
 var speed = 0.02;
 var phase = 0;
 var numRows = 20;
 var numCols = 32;
 var numStrands = 3;
 var slider;
 var button;

 function setup(){
   createCanvas(800,800);

   //Set some colour variables
   noStroke();
   colourA = color(253, 174, 120);
   colourB = color(226, 129, 161);
  //  slider = createSlider(1, 20, 5, 1);
  //  button = createButton('Rows!');
  //  button.mousePressed(drawCircles(slider.value()));
 }


 function draw(){
   background(4, 58, 74);
   drawCircles(numRows);
 }

 //TODO refactor so this is not 3 nested loops omg!
 function drawCircles(numRows){
   //Motion
   phase = frameCount * speed; //frameCount is number of passed frames
   for(var strand = 0; strand < numStrands; strand++){
     //Set a phase for each strand here
     var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

     //manage cols
     for(var col = 0; col < numCols; col++){
       //Column offset to space out the circles
       var colOffset = map(col, 0, numCols, 0, TWO_PI);
       //Set X & Y variables for the animated circles
       var x = map(col, 0, numCols, 50, width - 50);

       //manage rows
       for(var row = 0; row < numRows; row++){
         //Set an interpolation colour to phase between colourA and colourB
         fill(lerpColor(colourA, colourB, row / numRows));
         var y = height / 2 + row * 10 + sin(strandPhase + colOffset) * 50; //use variables strandPhase and colOffset to ensure 2 separate strands

         //Sizing
         var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.9; //Adjust the multiplication to affect size e.g. 50 > canvas size at max
         var circleSize = sizeOffset * maxCircleSize;

         //Draw some circles
         ellipse(x, y, circleSize, circleSize);
       }

     }

   }
 }
