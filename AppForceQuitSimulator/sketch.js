/**
 * Force Quit An iOS App Simulator
 **/

 function setup(){
   createCanvas(800,600);

   appWidth = 350;
   appHeight = 600;
   frontAppX = (width/2)-(appWidth/2);
   frontAppY = 100;
   backAppX = frontAppX-75;
   backAppY = frontAppY;

   button = createButton('Quit');
   button.mousePressed(quitApp);
 }


 function draw(){
   background(51);
   fill(204, 101, 180, 100);
   stroke(127, 63, 120);
   // A rectangle
   backApp = rect(backAppX, backAppY, appWidth, appHeight-50);
  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  // A rectangle
  frontApp = rect(frontAppX, frontAppY, appWidth, appHeight);




 }

 function quitApp() {

 }
