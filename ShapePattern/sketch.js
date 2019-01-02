/**
 * Draw shapes!
 **/
let maxShapes = 150;
function setup(){
  createCanvas(800,800);
  //Draw a random shape for maxIterations
  for(let i = 0; i < maxShapes; i++){
    drawRandomShape();
  }
}

//Draw a random shape
//In a random place
//In a random Colour
//Shapes from p5js examples: https://p5js.org/examples/hello-p5-simple-shapes.html
function drawRandomShape(){
  let x  = floor(random(width));
  let y = floor(random(height));
  let x1  = floor(random(width));
  let y1 = floor(random(height));
  let x2  = floor(random(width));
  let y2 = floor(random(height));
  let shapeHeight = random(height/5);
  let shapeWidth = random(width/5);
  let arcStart = floor(random(180));
  let arcStop = arcStart*2;
  let colour = color(floor(random(255)),floor(random(255)),floor(random(255)));
  noStroke();
  fill(colour);
  //pick a shape at random
  let shapeSelect = floor(random(5));
  switch(shapeSelect){
    case 0:
    console.log("rect");
      // A rectangle
      rect(x, y, shapeWidth, shapeHeight);
      break;
    case 1:
      console.log("elipse");
      // An ellipse
      ellipse(x, y, shapeWidth, shapeHeight);
      break;
    case 2:
    console.log("triangle");
      // A triangle
      triangle(x, y, x1, y1, x2, y2);
      break;
    case 3:
      console.log("arc");
      //arc
      arc(x, y, shapeWidth, shapeHeight, arcStart, arcStop); //replace with PI, TWO_PI?
      break;
    case 4:
      console.log("\'flower\'");
      //Kind of a mess this one
      for (let i = 0; i < 10; i ++) {
        ellipse(x, y, shapeWidth, shapeHeight);
        rotate(PI/5);
      }
      break;
    default:
      console.log("default: rect");
      // A rectangle
      rect(x, y, shapeWidth, shapeHeight);
      break;
  }
}
