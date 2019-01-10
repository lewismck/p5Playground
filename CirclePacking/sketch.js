/**
 * Circle packing based off of: https://youtu.be/QHEQuoIKgNE
 * Based off of the lovely coding train challenges:
 * https://github.com/CodingTrain/website/tree/master/CodingChallenges
 **/
 //TODO Abstract shapes class that this uses to draw random new shapes each time that all have
 // growing, edges and x,y properties
let circles = [];

function setup() {
  createCanvas(800, 800);
  //circles.push(new Circle(200, 200, 1));
}

function draw() {
  background(0);
  let c = newCircle();
  if(c != null){
    circles.push(c);
  }
  // frameRate(5);
  //This is a bit nasty...
  for(let c of circles){
    //If the circle is growing still
    if(c.growing){
      if(c.edges()){//Check it's not hit an edge, if it has stop growing
        c.growing = false;
      } else{
        for(let other of circles){ //else check all other circles it might be in contact with
          if(c != other){
            let d = dist(c.x,c.y, other.x, other.y);
            if(d - 2 < c.r + other.r){ //2 here is the pixel width of the cirle
              c.growing = false;
              break;
            }
          }
        }
      }
    }
    c.show();
    c.grow();
  }
}

function newCircle(){
  let x = random(width);
  let y = random(height);
  let valid = true;
  for(let c of circles){
    let d = dist(x,y, c.x, c.y);
    if(d < c.r){
      valid = false;
      break;
    }
  }
  return valid ? new Circle(x, y, 1) : null;
}


function checkDistance(x, y, circle){
  let d = dist(x,y, circle.x, circle.y);
  return d < circle.r;
}

/**
 * Just doing this in the draw loop is nice
 * Add circles infinitely each starting with radius 1 at a random place
 * Expand until they hit an edge
 **/
 // background(0);
 // let x = random(width);
 // let y = random(height);
 // circles.push(new Circle(x, y,1));
 // for(let c of circles){
 //   c.show();
 //   if(c.edges()){
 //     c.growing = false;
 //   }
 //   c.grow();
 // }
