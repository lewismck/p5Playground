/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/

let slider;
function setup(){
  createCanvas(window.innerWidth,800);
  slider = createSlider(0, 10, 2, 0.1);
}

function draw(){
  let r = 100;
  let a = 200;
  let b = 200;
  let n = slider.value();
  background(51);
  translate(width/2, height/2);
  stroke(255);
  noFill();

  beginShape()
  //For every point rotating round draw a point at the specific x,y coords
  for(let angle = 0; angle <TWO_PI; angle += 0.1){

    let na = 2/n;

    let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

    vertex(x,y);
  }
  endShape(CLOSE);
}

function sgn(val){
  return val > 0 ? 1 : val < 0 ? -1 : 0;
}
