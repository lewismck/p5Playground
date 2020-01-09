/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
var boxes = [];
var saveButton;

var fills = [
  [255, 204, 0], //orange/yellow 
  [0, 0, 255], //blue 
  [255, 0, 0], //red
  [0,0,0] //black
];

function setup() {
  var c = createCanvas(window.innerWidth, 800);
  
  background('white');
  //Create a load of boxes with random border widths
  //Fill some of them with red/yellow/blue
  for(var i = 0; i < random(20, height/10); i++){
      drawBox();
  }

  //add useful buttons
  saveButton = createButton('Save');
  saveButton.mousePressed(saveImage);
}

function draw() {
  
}

/**
 * TODO tidy this up and decide on positioning
 * Probably take x/y h/w params and write something to place the boxes in a sensible order on canvas
 * 
 */
function drawBox(){
  //StrokeWidth
  strokeWeight(random(1,10));
  //random fill
  if(random(0,1) > 0.5){
    fill(fills[Math.floor(Math.random()*fills.length)]);
  }
  //canvas x
  let canvX = random(width);
  //canvas y
  let canvY = random(canvX +(random(-100, 100)));
  //height
  let sqHeight = random(50, 500);
  //width
  let sqWidth = random(50, 500);
  rect(canvX, canvY, sqWidth, sqHeight);
}

function saveImage(){
  saveCanvas(c, 'auto-mondrian', 'jpg');
}
