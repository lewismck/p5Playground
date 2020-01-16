/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
var boxes = [];
var saveButton;
var c;

var fills = [
  [255, 204, 0], //orange/yellow 
  [0, 0, 255], //blue 
  [255, 0, 0], //red
  [255,255,255] //white
  //[0,0,0] //black
];

function setup() {
  let c = createCanvas(window.innerWidth, 800);
  let x=0;
  let y=0;
  background('white');
  
  //height
  let sqHeight = random(50, 500);
  //width
  let sqWidth = random(50, 500);
  
  //Create a load of boxes with random border widths
  //Fill some of them with red/yellow/blue/white
  //draw rects until we hit the end of the x and y axes
  //based off of: https://editor.p5js.org/angichau/sketches/r1BOM69-4
  while (y < height) {
    x = 0;
    
    while (x < width) {     
    	// fill(random(colors));
      // rect(x,y,currWidth,currHeight);
      let box = drawBox(x,y, sqHeight, sqWidth);
      x = x+sqWidth;
      sqWidth = random(50, 500);
      // currWidth = random(sizes); 
  	}
    y = y+sqHeight;
    sqHeight = random(50, 500);
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
function drawBox(canvX, canvY, sqHeight, sqWidth){
  //StrokeWidth
  strokeWeight(random(1,10));
  //random fill
  if(random(0,1) > 0.5){
    fill(fills[Math.floor(Math.random()*fills.length)]);
  }
  rect(canvX, canvY, sqWidth, sqHeight);
  // return {'w': sqWidth, 'h': sqHeight};
}

function saveImage(){
  saveCanvas(c, 'auto-mondrian', 'jpg');
}

