/**
 * Based off of the lovely coding train challenges:
 * https://github.com/CodingTrain/website/tree/master/CodingChallenges
 * https://youtu.be/6z7GQewK-Ks
 **/
let maxIterations = 100;
let minRange = -2.5;
let maxRange = 2.5;

let minSlider;
let maxSlider;
function setup(){
  createCanvas(400,400);
  pixelDensity(1);
  minSlider = createSlider(minRange, 0, minRange, 0.01);
  maxSlider = createSlider(0, 2.5, maxRange, 0.01);
}

function draw(){
  loadPixels();
  for(let x = 0; x < width; x++){
   for( let y = 0; y < height; y++){
     let a = map(x, 0, width, minSlider.value(), maxSlider.value());
     let b = map(y, 0, height, minSlider.value(), maxSlider.value());
     let ca = a;
     let cb = b;
     let n = 0;
     let z = 0;

     for(n; n < maxIterations; n++){
       //Start working out the set of numbers contained within the mandelbrot set
       let aa = a*a - b*b;
       let bb = 2*a*b;

       a = aa + ca;
       b = bb + cb;

       if(abs(a + b) > 16){
         break;
       }

     }
     /** Set a bounded background colour
      * Could be fixed e.g.
          let bright = 200;
        Could be calculated with mod 255 e.g.
          let bright = n*16%255;
        Or map of n, maxIterations and 0 to 255
          let bright = map(n, 0, maxIterations, 0, 255);
      **/
     let bright = map(n, 0, maxIterations, 0, 1);
     bright = map(sqrt(bright), 0, 1, 0, 255);

     /**
      * Every pixel has default brightness _unless_ it's made it to maxIterations
      * If it makes it to maxIterations then adjust it as it's within the set
      **/
     if(n === maxIterations){
       bright = 0;
     }

     let pix = (x+y*width)*4;
     pixels[pix+0] = bright;
     pixels[pix+1] = bright;
     pixels[pix+2] = bright;
     pixels[pix+3] = 255;
   }
  }
  updatePixels();
}
