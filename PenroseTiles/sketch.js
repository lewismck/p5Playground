/**
 * Penrose Tiles based off of: https://p5js.org/examples/simulate-penrose-tiles.html
 * https://en.wikipedia.org/wiki/Penrose_tiling
 **/
let ds;
let startLengthSlider, thetaSlider;
let backgroundColour = 0;
let lineColour = 255;

function setup() {
  createCanvas(window.innerWidth, 800);
  background(0);
  backgroundButton = createButton('Switch background Colour');
  backgroundButton.mousePressed(()=> {
      backgroundColour = color(floor(random(255)),floor(random(255)),floor(random(255)));
  });
  lineButton = createButton('Switch line Colour');
  lineButton.mousePressed(()=> {
      lineColour = color(floor(random(255)),floor(random(255)),floor(random(255)));
  });
  thetaSlider = createSlider(TWO_PI/10.0, TWO_PI/2, TWO_PI/10, TWO_PI/100);
  ds = new PenroseLSystem(580.0, thetaSlider.value(), lineColour);
  ds.simulate(5);//Num generations
}

function draw() {
  background(backgroundColour);
  ds.updateSliders(thetaSlider.value(), lineColour);
  ds.render();
}
