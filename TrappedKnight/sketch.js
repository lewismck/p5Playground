/**
 * Inspiration
 * https://www.youtube.com/watch?v=RGQe8waGJ4w&t=0s
 **/
let k, m, ms, info;
function setup(){
  createCanvas(window.innerWidth,800);
  //Set up nested array (square spiral chessboard) //Adjust chessboard, staggered diagonal ? regular?
  ms = 80;
  k = new Knight([ms/2,(ms/2)-1], 1, 2);
  console.log(k.currPos);
  m = generateMatrix(ms);
  console.log(m);
  console.log(k);

  info = createP('');
  background(51);
}

function draw(){

  let colourA = color(floor(random(255)),floor(random(255)),floor(random(255)));//color(253, 174, 120); these are neat colours
  let colourB = color(floor(random(255)),floor(random(255)),floor(random(255)));//color(226, 129, 161);

  //run and draw knight working through pattern
  while(!k.stuck){
    let startStroke = k.currPos;
    stroke(lerpColor(colourA, colourB, sin(startStroke[0])*2));

    k.move(m, k.currPos);

    line(
      startStroke[0]*10,
      startStroke[1]*10,
      k.currPos[0]*10,
      k.currPos[1]*10
    );

  }
  
  let outcome = 'Finished!<br/> last move: ' + k.visited[k.visited.length-1] +
  '<br/> Total Moves: ' + k.visited.length;
  info.html(outcome);
  console.log(k);

  noLoop();
}

function generateMatrix(n){
  //Create starting Array
  let result = new Array(n).fill().map(
    () => new Array(n).fill(0)
  );

  //Work out nxn
  let startPos = n*n;
  //https://code.likeagirl.io/create-a-nxn-matrix-spiral-with-javascript-955ee18402f7 Thanks!
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
          result[startRow][i] = startPos;
          startPos--;
      }
      startRow++;
      for (let j = startRow; j <= endRow; j++) {
          result[j][endCol] = startPos;
          startPos--;
      }

      endCol--;

      for (let i = endCol; i >= startCol; i--) {
          result[endRow][i] = startPos;
          startPos--;
      }

      endRow--;
      for (let i = endRow; i >= startRow; i--) {
          result[i][startCol] = startPos;
          startPos--;
      }

      startCol++;

  }

  return result;
}
