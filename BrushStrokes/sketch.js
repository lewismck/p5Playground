/**
 * Based off Daniel Shiffman's great coding examples:
 * https://github.com/CodingTrain/Rainbow-Code/blob/master/CodingChallenges
 **/
var brushes = [];
var saveButton;
var noLoopButton;
var noLoopVariable = true;
var c;

function setup() {
  var c = createCanvas(window.innerWidth, 1800);
  background(200);
  for (var i = 0; i < 70; i++) {
    brushes[i] = createBrush(10);//new Particle(random(width), random(height));
  }

  //add useful buttons
  saveButton = createButton('Save');
  saveButton.mousePressed(saveImage);

  noLoopButton = createButton('Pause');
  noLoopButton.mousePressed(setNoLoopVariable);
}

function draw() {
  // For each brush loop through every bristle
  for(brush of brushes){
    for(bristle of brush){
      var increment = random(-1, 5);
      bristle.update(increment);
      bristle.show();
    }
  }
}

function createBrush(numBristles){
  var bristles = [];
  var x = random(width);
  var y = random(height);
  var col = color(random(255),random(255),random(255));
  
  for (var i = 0; i <= numBristles; i++) {
    bristles[i] = new Particle(
      random(x-numBristles, x+numBristles), 
      random(y-numBristles, y+numBristles),
      col
      //Add radius to constructor?
    );
  }

  return bristles;
}

function saveImage(){
  saveCanvas(c, 'brushstrokes-experiment', 'jpg');
}

function setNoLoopVariable(){
  noLoopVariable ? noLoop() : loop();
  var btnText = noLoopVariable ? 'Resume' : 'Pause';
  noLoopVariable = !noLoopVariable;
  noLoopButton.html(btnText);
}
